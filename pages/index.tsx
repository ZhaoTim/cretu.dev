import type { NextPage } from 'next'

import Container from '@components/Container'

const Home: NextPage = () => {
  return (
    <Container>
      <header className='flex flex-col gap-3'>
        <p>你好，很巧，我们在这遇到了，不如我来做个自我介绍 🧐</p>
        <p>
          目前我的职业是一名全职的前端工程师，已经在北京漂了4年。目标是找到一份remote
          job，去一座有海的城市生活
        </p>
        <p>
          我的家乡是冰城 - 哈尔滨，如果你想去那玩，我可以给你提供一些游玩建议 🤓
        </p>
        <p>
          我的爱好是摄影 📸，使用的设备是Sony A7R3 + Sigma 40mm
          F1.4，比较擅长街头摄影，当然我也可以帮你拍一些人像（如果你有勇气的话lol)
        </p>
        <p>
          如果你想联系我，这是我的邮箱📮：{' '}
          <span className='font-bold'>zhaomeicheng1@gmail.com</span>
        </p>
        <div
          className='font-bold underline'
          style={{
            background: 'linear-gradient(to right, #30CFD0 0%, #330867 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
          }}
        >
          你可以点击左上角来查看我博客的更多内容 / 修改日、夜间模式 ❤
        </div>
      </header>
    </Container>
  )
}

export default Home
