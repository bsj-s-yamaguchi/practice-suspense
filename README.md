# Redux と Suspense を活用した Next.js 13+ (App Router)の使い方

Next.js 13+ の App Router を使用し、**Redux** と **React Suspense** を組み合わせた実装方法を説明します。

## 概要

**・Server & Client Components の適切な Suspense の利用**  
**・Redux の適切な活用（Client Components 内のみ）**

## プロジェクト構成
```
app/
│── ss/   (サーバー -> サーバー)
│   │── page.tsx
│   │── ServerComponent.tsx
│
│── sc/   (サーバー -> クライアント)
│   │── page.tsx
│   │── ClientComponent.tsx
│
│── cs/   (クライアント -> サーバー)
│   │── page.tsx
│   │── ServerComponent.tsx
│
│── cc/   (クライアント -> クライアント)
│   │── page.tsx
│   │── ClientComponent.tsx
│   │── ReduxClientComponent.tsx
│   │── layout.tsx
│
│── lib/
│   ├── fetchData.ts  (データ取得関数)
│
└── store/
    ├── store.ts  (Reduxストア設定)
    ├── dataSlice.ts  (Reduxのスライス)
```

---

## 各フォルダの説明

### **1️ サーバー -> サーバー (`ss/`)
- 親 (`page.tsx`): **サーバーコンポーネント**
- 子 (`ServerComponent.tsx`): **サーバーコンポーネント**
- **Suspense**: サーバー側の非同期処理の待機に使用

### **2️ サーバー -> クライアント (`sc/`)
- 親 (`page.tsx`): **サーバーコンポーネント**
- 子 (`ClientComponent.tsx`): **クライアントコンポーネント**
- **Suspense**: サーバーコンポーネントが親で、クライアントコンポーネントが子の場合、Suspense で遅延表示はできない

### **3️ クライアント -> サーバー (`cs/`)
- 親 (`page.tsx`): **クライアントコンポーネント**
- 子 (`ServerComponent.tsx`): **サーバーコンポーネント**
- **Suspense**: 不要（サーバーコンポーネントは事前にレンダリングされるため）

### **4️ クライアント -> クライアント (`cc/`)
- 親 (`page.tsx`): **クライアントコンポーネント**
- 子 (`ClientComponent.tsx`): **クライアントコンポーネント**
- 子 (`ReduxClientComponent.tsx`): **クライアントコンポーネント**
- **Redux** を使用
- **Suspense**: Redux の非同期状態更新の待機に使用


---

## 🎯 まとめ
| フォルダ | 親 | 子 | Suspense | Redux |
|--------|--------|--------|----------|------|
| `ss/` | サーバー | サーバー | ✅ 可能 | ❌ なし |
| `sc/` | サーバー | クライアント | ❌ 不可 (使えるが遅延表示できない、意味ない) | ✅ (子コンポーネント内) |
| `cs/` | クライアント | サーバー | ❌ 不要 | ❌ なし |
| `cc/` | クライアント | クライアント | ✅ 可能 | ✅ あり |

---

