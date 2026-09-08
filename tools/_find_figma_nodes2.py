# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding="utf-8")
path = r"C:\Users\PMYLS\.cursor\projects\c-Users-PMYLS-Desktop-electris\agent-tools\9a335589-6dff-43e7-84ac-7fd948fb620b.txt"
needles = ["Why Electrify", "2349:3219", "2349:3236", "GÉOPOLITIQUE", "Calculer mon", "watermark", "logo mark", "electris symbol"]
with open(path, "r", encoding="utf-8", errors="ignore") as f:
    for i, line in enumerate(f, 1):
        if any(n in line for n in needles):
            print(f"{i}: {line.rstrip()[:260]}")
