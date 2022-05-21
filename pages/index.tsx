import type { NextPage } from 'next'

import Container from '@components/Container'

const Home: NextPage = () => {
  return (
    <Container>
      <header className='flex flex-col gap-3'>
        <div className='alert alert-success shadow-lg'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='stroke-current flex-shrink-0 w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
            <span>点击左上角来查看我博客的更多内容 / 修改日、夜间模式 ❤</span>
          </div>
        </div>
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
      </header>
    </Container>
  )
}

export default Home
