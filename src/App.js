// 路由需引入的函式庫組
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Layout from '@/pages/Layout'

function App () {
  return (
    // 路由配置
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 創建路由 path 和組件對應關係 */}
          <Route path='/' element={<Layout />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
