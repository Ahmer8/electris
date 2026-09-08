# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding="utf-8")
path = r"C:\Users\PMYLS\.cursor\projects\c-Users-PMYLS-Desktop-electris\agent-tools\9a335589-6dff-43e7-84ac-7fd948fb620b.txt"
needles = [
    "Pourquoi",
    "électrifier",
    "GÉOPOLITIQUE",
    "GEOPOLITIQUE",
    "Calculer mon gain",
    "why",
    "Bienvenue",
]
with open(path, "r", encoding="utf-8", errors="ignore") as f:
    for i, line in enumerate(f, 1):
        low = line.lower()
        if any(n.lower() in low for n in needles) or any(n in line for n in needles):
            print(f"{i}: {line.rstrip()[:240]}")
