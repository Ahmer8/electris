# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding="utf-8")
path = r"C:\Users\PMYLS\.cursor\projects\c-Users-PMYLS-Desktop-electris\agent-tools\9a335589-6dff-43e7-84ac-7fd948fb620b.txt"
# Find brand logos / watermark near why section 2349:3217 area
with open(path, "r", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()
# print lines 112-250 of landing (after why content)
for i, line in enumerate(lines):
    if 'id="2349:3217"' in line:
        for j in range(i, min(i + 200, len(lines))):
            l = lines[j].rstrip()
            # shallow + interesting
            if any(k in l for k in ["frame", "image", "instance", "section", "Brand", "Logo", "watermark", "Vector", "Subtract", "ellipse"]):
                lead = len(l) - len(l.lstrip(" "))
                if lead <= 14:
                    print(f"{j+1}|{lead}|{l[:200]}")
        break
