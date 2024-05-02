import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface LanguageState {
  language: 'en' | 'ja'
}

// Define the initial state in reducer
const initialState: LanguageState = {
  language: 'en', // default lang
}

// Define Slice
// createSlice can define reducers and action creators together
const LanguageSlice = createSlice({
  // name: name of the slice. Used as a prefix for action types
  name: 'language',
  // initialState: 上で定義した初期状態をこのスライスに割り当て
  initialState,
  // reducers: アクションタイプとそれを処理するリデューサーロジックのマッピング
  reducers: {
    // state と action を引数に取り、state.language を action.payload で更新
    setLanguage: (state, action: PayloadAction<'en' | 'ja'>) => {
      state.language = action.payload
    },
  },
})

// languageSlice.actions: createSlice によって自動的に生成されるアクションクリエーター
// setLanguage アクションクリエーターをエクスポート
export const { setLanguage } = LanguageSlice.actions
// languageSlice.reducer: スライスに対応するリデューサー
// リデューサーをストアの設定時に組み込むことで、対応するアクションがディスパッチされたときに状態更新が行われる
export default LanguageSlice.reducer
