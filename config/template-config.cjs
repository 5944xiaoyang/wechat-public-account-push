/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: 'o6DX56bIBqdA6g2HhyhV2InGnZqA',
    title: '亲爱的张张, 早上好呀',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}:'春节',
      
      ---
      
      城市：{{city.DATA}}:'湖北钟祥',
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们相识的第{{love_day.DATA}}天:'2022-06-24',
      
      {{birthday_message.DATA}}:'01-20',
      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
    `
  },
  {
    id: 'o6DX56Zu03fXZVhDr0T3LN3eUcpc',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
