import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { Layout, Tooltip } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import './App.css'
import Movies from './screens/Movies'
import MovieDetail from './screens/MovieDetail'

const { Header, Content } = Layout

function Dashboard() {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <Layout>
      <Header
        style={{
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h4>OMDB-Movies </h4>
        {location.pathname.includes('movies') && (
          <Tooltip title="Back To Home Page">
            <ArrowLeftOutlined
              onClick={() => {
                navigate('/')
              }}
            />
          </Tooltip>
        )}
      </Header>
      <Content style={{ padding: 50, backgroundColor: '#f5f5f5' }}>
        <Outlet />
      </Content>
    </Layout>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetail />} />
      </Route>
    </Routes>
  )
}
export default App
