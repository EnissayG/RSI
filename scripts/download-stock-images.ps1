# Images thématiques → public/images/stock (Unsplash + Pexels + photos RSI)
$dir = Join-Path $PSScriptRoot "..\public\images\stock"
$imports = Join-Path $PSScriptRoot "..\src\imports"
New-Item -ItemType Directory -Force -Path $dir | Out-Null

$headers = @{ "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" }

function Save-Url($filename, $url) {
  $out = Join-Path $dir $filename
  try {
    Invoke-WebRequest -Uri $url -OutFile $out -Headers $headers -UseBasicParsing -TimeoutSec 120
    if ((Get-Item $out).Length -lt 12000) { throw "trop petit" }
    Write-Host "OK $filename"
    return $true
  } catch {
    Write-Host "FAIL $filename"
    return $false
  }
}

function Save-Pexels($filename, $id, $w = 1400) {
  $url = "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&w=$w"
  Save-Url $filename $url
}

function Save-Unsplash($filename, $photoId, $w = 1400) {
  $url = "https://images.unsplash.com/$photoId`?auto=format&fit=crop&w=$w&q=85"
  Save-Url $filename $url
}

function Copy-Local($filename, $source) {
  $src = Join-Path $imports $source
  if (Test-Path $src) {
    Copy-Item $src (Join-Path $dir $filename) -Force
    Write-Host "LOCAL $filename <- $source"
    return $true
  }
  return $false
}

# --- Carrousel : photos RSI réelles + stock cohérent ---
Copy-Local "hero-1.jpg" "logement-RSI-exterieur.jpg"
Copy-Local "hero-2.jpg" "rsi-propulsion-handicap.jpg"
Save-Pexels "hero-3.jpg" 5257009 1600    # vie communautaire — personnes ensemble
Save-Pexels "hero-4.jpg" 3184418 1600    # échange / accompagnement en groupe

# --- Mission accueil ---
Save-Pexels "mission-1.jpg" 276724 1200   # salon / appartement
Save-Pexels "mission-2.jpg" 7551650 1200  # accompagnement soins
Save-Pexels "mission-3.jpg" 3184418 1200  # groupe / communauté

Save-Unsplash "equitoit.jpg" "photo-1560518883-ce09059eeffa" 1200
Save-Pexels "accompagnement.jpg" 4386466 1200  # soignant / patient

# --- Services ---
Save-Pexels "soins.jpg" 7551650 1200        # aide aux activités de la vie quotidienne
Save-Pexels "domestique.jpg" 4108710 1200
Save-Pexels "repas.jpg" 1267320 1200       # repas en communauté (plusieurs personnes)
Save-Pexels "services-integres.jpg" 3768131 1200  # services intégrés / soutien
Save-Pexels "hero-services.jpg" 4386466 1600      # accompagnement quotidien (RSI)

# --- Héros pages ---
Save-Pexels "hero-criteres.jpg" 590022 1600       # formulaire / critères (clipboard)
Save-Pexels "criteres-section.jpg" 590022 1200   # formulaire / critères (clipboard, pas 7688258)
Copy-Local "contact-location.jpg" "logement-RSI-exterieur.jpg"  # bâtiment RSI pour la carte
Save-Unsplash "hero-admission.jpg" "photo-1450101499163-c8848c66ca85" 1600
Save-Pexels "hero-equipe.jpg" 3184418 1600
Save-Unsplash "hero-historique.jpg" "photo-1514565131-fce0801e5785" 1600
Save-Pexels "hero-contact.jpg" 8867437 1600       # accueil — joindre RSI
Save-Pexels "contact-section.jpg" 8199564 1200  # nous écrire / appeler (section contenu)
Save-Pexels "hero-faq.jpg" 5428836 1600
Save-Unsplash "hero-carriere.jpg" "photo-1521791136064-7986c2920216" 1600
Save-Pexels "hero-don.jpg" 6646918 1600
Save-Pexels "hero-confidentialite.jpg" 7723299 1600  # données / confidentialité
