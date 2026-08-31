$base = "https://www.figma.com/api/mcp/asset"
$gtb = "assets/images/technologie/gtb"
$gal = "assets/images/technologie/gallery"
New-Item -ItemType Directory -Force -Path $gtb, $gal | Out-Null

# Photos/illustrations already downloaded as raw source images
$copies = @{
  "$gtb/hero.png"          = "_figma-ref/p27/hero/raw01.png"
  "$gtb/problem.png"       = "_figma-ref/p27/problem/raw01.png"
  "$gtb/process.png"       = "_figma-ref/p27/process/raw01.png"
  "$gtb/elig-main.png"     = "_figma-ref/p27/elig/raw01.png"
  "$gtb/elig-overlay.png"  = "_figma-ref/p27/elig/raw03.png"
  "$gtb/case-1.png"        = "_figma-ref/p27/results/raw03.png"
  "$gtb/case-2.png"        = "_figma-ref/p27/results/raw04.png"
}
foreach ($dest in $copies.Keys) { Copy-Item -Force $copies[$dest] $dest }

# Advantage illustrations (design order 1..6)
$reasons = @(
  "86f93a9d-120e-4922-a3cc-670918b1aff9.png",
  "d5bde45d-a575-4af4-8ff6-75ea2ea75a0c.png",
  "01bb098b-4f8c-4424-b5d7-a8047f8c9159.png",
  "fe691a3b-5ebb-40ca-a603-92b68a5162dc.png",
  "9ded91cf-d75d-452e-9971-f51a70ec924c.png",
  "bdb341d3-5625-4270-b055-dfed3a3ab57e.png"
)
for ($i = 0; $i -lt $reasons.Count; $i++) {
  curl.exe -L -s -o "$gtb/reason-$($i+1).png" "$base/$($reasons[$i])"
}

# Hero metric-card icons + metrics band icons
$icons = @{
  "$gtb/icon-eco.svg" = "519819dc-56b4-4d19-ba3c-5306e1f50828.svg"
  "$gtb/icon-roi.svg" = "c4580e10-1ba7-4ac6-9723-2667eb82ba79.svg"
  "$gtb/icon-cpe.svg" = "c91fb94a-00db-4567-a100-a1d4a1f5ec1c.svg"
  "$gtb/metric-1.svg" = "e3453951-b27d-4b29-a75c-46d8ac52ab1f.svg"
  "$gtb/metric-2.svg" = "82b2ea10-2765-447e-a014-8dd996ae69e6.svg"
  "$gtb/metric-3.svg" = "e688ff6b-8c6c-48f9-9a14-4d1b3213f4eb.svg"
  "$gtb/metric-4.svg" = "79bc2032-15b6-47e2-add6-48b30e6a8cc3.svg"
}
foreach ($dest in $icons.Keys) { curl.exe -L -s -o $dest "$base/$($icons[$dest])" }

# Shared "Technologies possibles" gallery tiles (design order)
$tiles = @{
  "$gal/tile-cascade.png"         = "d545bdb2-bed5-4b19-b841-a01818e4d8f8.png"
  "$gal/tile-mcp.png"             = "728e06c2-04fe-4074-ad8d-d63bc42b2485.png"
  "$gal/tile-gtb.png"             = "ac40c0d6-255b-4840-a060-5b1f2d7d5f31.png"
  "$gal/tile-hpbp.png"            = "94067cc1-eb12-4b9f-adcc-cab47e3a4031.png"
  "$gal/tile-freecooling.png"     = "3ea67466-5538-4ae2-a087-a17e59a1b621.png"
  "$gal/tile-destratification.png"= "935da82b-8c26-487b-bd63-e0821078df58.png"
}
foreach ($dest in $tiles.Keys) { curl.exe -L -s -o $dest "$base/$($tiles[$dest])" }

Get-ChildItem $gtb, $gal -File | ForEach-Object { "{0,-32} {1,6} KB" -f $_.Name, [int]($_.Length/1KB) }
