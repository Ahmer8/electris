"""Upload Webflow assets via S3 multipart using create_asset uploadDetails."""
import json
import os
import sys

import requests

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JOBS_PATH = os.path.join(os.path.dirname(__file__), "_upload_jobs.json")


def upload(job):
    path = os.path.join(ROOT, job["file"])
    details = job["details"]
    # Normalize keys from camelCase MCP response if needed
    form = {
        "acl": details.get("acl") or details.get("acl"),
        "success_action_status": str(
            details.get("success_action_status")
            or details.get("successActionStatus")
            or "201"
        ),
        "Content-Type": details.get("Content-Type")
        or details.get("contentType")
        or "image/png",
        "Cache-Control": details.get("Cache-Control")
        or details.get("cacheControl")
        or "max-age=31536000",
        "key": details["key"],
        "Policy": details.get("Policy") or details.get("policy"),
        "X-Amz-Algorithm": details.get("X-Amz-Algorithm")
        or details.get("xAmzAlgorithm"),
        "X-Amz-Credential": details.get("X-Amz-Credential")
        or details.get("xAmzCredential"),
        "X-Amz-Date": details.get("X-Amz-Date") or details.get("xAmzDate"),
        "X-Amz-Signature": details.get("X-Amz-Signature")
        or details.get("xAmzSignature"),
    }
    url = job.get("uploadUrl") or "https://webflow-prod-assets.s3.amazonaws.com/"
    ctype = form["Content-Type"]
    with open(path, "rb") as f:
        files = {"file": (os.path.basename(path), f, ctype)}
        r = requests.post(url, data=form, files=files, timeout=120)
    return r.status_code, os.path.basename(path)


def main():
    with open(JOBS_PATH, encoding="utf-8") as f:
        jobs = json.load(f)
    ok = 0
    for job in jobs:
        code, name = upload(job)
        print(f"{code} {name} id={job.get('id','')}")
        if code == 201:
            ok += 1
    print(f"DONE {ok}/{len(jobs)}")
    return 0 if ok == len(jobs) else 1


if __name__ == "__main__":
    sys.exit(main())
