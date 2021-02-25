import React from 'react'
import RouterIndex from './router'
import MainHeader from './components/MainHeader/'
import { Layout } from 'antd'
const { Header, Footer } = Layout

function App() {
  return (
    <Layout className="App">
      <Header className="header">
        <MainHeader />
      </Header>
      <main className="main">
        <RouterIndex />
      </main>
      <Footer className="footer">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</Footer>
    </Layout>
  );
}

export default App;
