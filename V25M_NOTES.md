# V25M — Vercel dependency fix

- Fixed Vercel npm ERESOLVE caused by mismatched React type packages.
- Pinned `@types/react` to `19.3.0`.
- Pinned `@types/react-dom` to `19.3.0`.
- Updated root package-lock metadata to match.
- Project version bumped to `1.6.8`.

The failure happened before Next.js build because `@types/react-dom@19.3.0` requires `@types/react@^19.3.0`, while the project had `@types/react@19.2.18`.
