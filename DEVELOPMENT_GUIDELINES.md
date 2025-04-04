# Project Development Guidelines

## File & Folder Naming

### Kebab-case Convention

- Use lowercase with hyphens for all filenames and folders:
    ```text
    components/
      user-profile/
        avatar-card.tsx
        contact-form.tsx
    pages/
      pricing-plans/
        enterprise-tier.tsx
    ```

### Barrel Files

- Always include `index.ts` for public exports:
    ```typescript
    // components/user-profile/index.ts
    export { default as AvatarCard } from './avatar-card';
    export { default as ContactForm } from './contact-form';
    ```
- Import using directory path (no `/index`):

    ```typescript
    // ✅ Correct
    import { AvatarCard } from '@/components/user-profile';

    // ❌ Avoid
    import { AvatarCard } from '@/components/user-profile/index';
    ```

## Branch Naming

### Format

```
<type>/<short-description>-<issue-number>
```

### Types

| Prefix   | Use Case              |
| -------- | --------------------- |
| `feat/`  | New features          |
| `fix/`   | Bug fixes             |
| `docs/`  | Documentation updates |
| `chore/` | Maintenance tasks     |

### Examples

```
feat/user-auth-42
fix/profile-loading-128
docs/readme-update-15
```

## PR

```
git add .
git status
git commit -m
```

<!-- PR commit example - git commit -m "feat: Fetcher for the server and client implemented"  -->

## Component Architecture

### Structure

```
components/
  feature-name/
    component-name.tsx
    component-name.test.tsx
    index.ts
```

### Naming Rules

- PascalCase for components:

    ```typescript
    // ✅ Correct
    export default function UserProfileCard() {}

    // ❌ Avoid
    export default function userProfileCard() {}
    ```

- Props: camelCase
    ```typescript
    interface Props {
        isLoading: boolean;
        onUserClick: () => void;
    }
    ```

## TypeScript Conventions

### Interfaces vs Types

- Use `interface` for public APIs:
    ```typescript
    interface UserProfile {
        id: string;
        name: string;
    }
    ```
- Use `type` for complex types:
    ```typescript
    type UserProfileResponse = ApiResponse<UserProfile>;
    ```

## Git Commit Messages

### Format

```
<type>: <description>
```

```
VALID_TYPES="feat|fix|docs|style|refactor|test|chore|build|ci|perf|revert"
```

- Description minimum length : 15 Chars

### Examples

```
feat: add Google OAuth integration
fix: correct avatar loading state
docs: update installation instructions
```

## Code Style

### Imports Order

1. React & external libs
2. Internal components
3. Styles & types

```typescript
import { useState } from 'react';
import Head from 'next/head';
import UserProfile from '@/components/user-profile';
import type { User } from '@/types';
```

### Additional Rules

- 2-space indentation
- Semicolons required
- Single quotes for strings
- TypeScript strict mode enabled

---
