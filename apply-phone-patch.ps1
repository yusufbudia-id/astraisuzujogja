$ErrorActionPreference = 'Stop'

$root = (Get-Location).Path
$changes = @(
    @{
        Path = 'src/lib/whatsapp.ts'
        Replacements = @(
            @{ Old = "export const WHATSAPP_DISPLAY = '0897-8724-999';"; New = "export const WHATSAPP_DISPLAY = '+62 822-5185-3096';" },
            @{ Old = "export const WHATSAPP_NUMBER = '628978724999';"; New = "export const WHATSAPP_NUMBER = '6282251853096';" }
        )
    },
    @{
        Path = 'src/app/HomeClient.tsx'
        Replacements = @(
            @{ Old = '0897 8724 999'; New = '+62 822-5185-3096' },
            @{ Old = '0897-8724-999'; New = '+62 822-5185-3096' }
        )
    },
    @{
        Path = 'src/app/layout.tsx'
        Replacements = @(
            @{ Old = '+628978724999'; New = '+6282251853096' }
        )
    }
)

$updated = @()
foreach ($item in $changes) {
    $file = Join-Path $root $item.Path
    if (-not (Test-Path $file)) {
        Write-Warning "Skip: $($item.Path) tidak ditemukan."
        continue
    }

    $content = Get-Content -Raw -LiteralPath $file
    $original = $content

    foreach ($replacement in $item.Replacements) {
        if ($content.Contains($replacement.Old)) {
            $content = $content.Replace($replacement.Old, $replacement.New)
        }
    }

    if ($content -ne $original) {
        Set-Content -LiteralPath $file -Value $content -Encoding utf8
        $updated += $item.Path
        Write-Host "Updated: $($item.Path)" -ForegroundColor Green
    } else {
        Write-Host "No matching old number in: $($item.Path)" -ForegroundColor Yellow
    }
}

Write-Host ''
Write-Host 'Nomor baru:' -ForegroundColor Cyan
Write-Host 'Display : +62 822-5185-3096'
Write-Host 'wa.me   : 6282251853096'
Write-Host ''
if ($updated.Count -gt 0) {
    Write-Host 'Patch selesai. Hapus folder .next lalu jalankan npm run dev.' -ForegroundColor Cyan
} else {
    Write-Host 'Tidak ada file yang berubah. Cek apakah nomor lama sudah pernah diganti.' -ForegroundColor Yellow
}
