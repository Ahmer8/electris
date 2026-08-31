$base = "https://www.figma.com/api/mcp/asset"
$root = "_figma-ref/p27"

$sections = @{
  "hero" = @{
    export = "fadd5779-d9a9-4c9a-8c4c-9d0cdc301be2.png"
    raw = @("e2b6c7c3-997f-4569-9654-4b115d650b3c","b70cf437-af4c-468e-853d-51d27bdefe41")
  }
  "problem" = @{
    export = "dd92e2f6-6e7b-4442-bbee-05cc2f5b2e9b.png"
    raw = @("3939d57c-2299-4523-b5db-ef6b4950e083")
  }
  "process" = @{
    export = "9eb73f21-e5ca-4d35-8194-acc68eb91b9f.png"
    raw = @("361d8e88-a2a6-413a-846e-146ecba0dab4","93bc3ad5-5990-4af3-8e1a-f6ee14cec3c0")
  }
  "elig" = @{
    export = "f23dfa26-07c8-4711-9727-52c319cdc8e1.png"
    raw = @("207cc685-1fe5-457d-8e1a-f3e18ee010c5","a5f46396-b0fb-460d-9ac3-4baec0ca36fb","c4ab670b-2968-48ac-98cb-fbbf73aeaba1")
  }
  "advantages" = @{
    export = "08c4da36-dea7-4d20-8ca7-d75e21b68f9f.png"
    raw = @("d482400c-9dff-40db-9cc0-b2cd4c7c7db7","1bcf1180-1bc6-4467-8a64-45260dbf2ba7","12018113-0669-43a5-842f-5cc579f72b98","754cd1bd-3a33-4fe8-a8d4-6e6cc188376d","80933712-9be2-472b-b45d-1993bf1d17cb","a7ea8c5f-330e-4ea8-909c-fe4af8351838","df928cff-01de-4eed-82bc-601c0a4e5725","0b8a631a-0e3d-42a9-bd39-eeb14cc2786c","5634ac8f-f5a2-462a-8c0f-24c58ca93895","e88df2b8-92b2-43a8-bad9-68caafad7c93","3c6c1752-e42f-4e40-9f99-a7f61c2d4070","e34fed07-14fd-4fc6-bd8b-a5bd67f92ced","ee41be1d-5d9b-4ea3-a6ee-6a3c9918c9c8","614e8ff0-119e-4e69-abc3-167544042ff0")
  }
  "gallery" = @{
    export = "7d0fa65e-bc0a-426f-bd6e-c52f6004abdf.png"
    raw = @("384c4690-90a9-4720-9806-fe105109d064","8d69139d-ca7e-46d6-88c4-e619c4c00182","530e6c5d-e6f7-4e0b-a7e1-d8869308b57e","f87a832f-c403-46cd-adce-7ef3198fef53","5418e843-54ce-45e0-9600-9985372de8f1","25af4f32-786a-412a-8cf8-a754956e6ee4","289d4c72-99bf-4aba-b4ce-0fb2c635c953","c5d3479a-324d-4583-a43c-3855163b07ed","0b1d699d-7766-44ab-ae21-e1218f315e42","d12d6760-78a4-4260-b488-fc81d92dfa71","9b071b21-0548-44a5-af18-aa44158ace2b","b44e2288-a386-4a9c-8677-67c4ea7a1963","7aa54707-0a28-464f-a61e-19bbbc81c0af","619a2d63-dcdf-431d-8a84-6b141de2ac40")
  }
  "results" = @{
    export = "53f6c4b0-301b-42ed-b94c-9096a0ddcfd4.png"
    raw = @("cebbd468-9684-4b8b-92bb-ad16b35e6086","ff2984d4-36c2-4d63-8709-6146bfbca447","1ef59c50-8141-4570-9572-6204b5d5d2f7","9dd70162-df80-41c9-aaf0-a8e0adb2d58d")
  }
}

foreach ($name in $sections.Keys) {
  $dir = Join-Path $root $name
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  $s = $sections[$name]
  curl.exe -L -s -o (Join-Path $dir "_export.png") "$base/$($s.export)"
  $i = 1
  foreach ($id in $s.raw) {
    curl.exe -L -s -o (Join-Path $dir ("raw{0:d2}.png" -f $i)) "$base/$id"
    $i++
  }
}

Get-ChildItem $root -Recurse -File | ForEach-Object {
  "{0,-34} {1,7} KB" -f ($_.FullName -replace [regex]::Escape((Resolve-Path $root).Path + "\"), ""), [int]($_.Length/1KB)
}
