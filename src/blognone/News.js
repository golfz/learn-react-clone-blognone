import React, { Component } from 'react'

class News extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-title">Facebook ไล่ลบแชทที่ Mark Zuckerberg คุยกับคนอื่น โดยให้เหตุผลด้านความปลอดภัย</div>
        <div className="wrap-news-detail">
          <div className="news-meta">
            <div className="author">By: sponsored on 4 April 2018 - 09:50</div>
            <div className="tags">Tags:
              <ul>
                <li>asdf</li>
                <li>asdfa</li>
                <li>rette</li>
                <li>hjk</li>
              </ul>
            </div>
          </div>
      
          <div>
            <img src="https://www.blognone.com/sites/default/files/styles/thumbnail/public/topics-images/zuck.png?itok=60-tVyCY" />
            <p>
              Facebook Messenger ยังไม่มีฟีเจอร์ลบข้อความของตัวเองที่ส่งไปหาเพื่อนได้ แต่ Facebook สามารถทำฟีเจอร์นี้ให้ Mark Zuckerberg ได้

TechCrunch รายงานอ้างอิงแหล่งข่าวพบว่า มีคนสามคนที่เคยแชทคุยกับ Zuckerberg เมื่อย้อนดูแชทเก่าปรากฏว่าไม่มีข้อความที่ Zuckerberg คุยมา เหลือแต่ข้อความของตนทำให้ดูเหมือนคุยกับตัวเอง

Facebook ให้เหตุผลว่าเพื่อความปลอดภัยของบริษัท โดยอ้างอิงเหตุการณ์ถูกแฮ็กอีเมลของ Sony Pictures ในปี 2014 ที่ข้อมูลภายในบริษัทรั่วไหล Facebook บอกว่าหลังจากเหตุการณ์นั้น บริษัทก็ทำหลายวิธีเพื่อปกป้องการสื่อสารจากผู้บริหารระดับสูงในองค์กร ซึ่งรวมทั้งการจำกัดเวลาเก็บรักษาข้อความของ Zuckerberg ใน Messenger ด้วย

เมื่อถูกถามว่า การลบข้อความออกแบบนี้จะกระทบความเชื่อมั่นต่อบริษัทหรือไม่ Facebook ไม่ได้ตอบประเด็นนี้
            </p>
            <span>ที่มา - <i>Cnet</i></span>
          </div>
      
        </div>
        <div className="wrap-news-footer">
          <ul>
            <li>read more</li>
            <li>2 comments</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default News