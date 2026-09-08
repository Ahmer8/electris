# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding="utf-8")
path = r"C:\Users\PMYLS\.cursor\projects\c-Users-PMYLS-Desktop-electris\agent-tools\9a335589-6dff-43e7-84ac-7fd948fb620b.txt"
# print context around Landing Page first ~200 lines of children under 2349:3122
with open(path, "r", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()
for i, line in enumerate(lines):
    if 'id="2349:3122"' in line:
        for j in range(i, min(i + 120, len(lines))):
            print(f"{j+1}: {lines[j].rstrip()[:220]}")
        break
