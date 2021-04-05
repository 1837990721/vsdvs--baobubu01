name: 悦动族

on:
  workflow_dispatch:
  schedule:
     - cron: '0,30 16-15 * * *'
  watch:
    types: started
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    env:
        YDZ_yuedongzuTOKEN: ${{ secrets. YDZ_yuedongzuTOKEN }}		
        
    steps:
      - name: Checkout
        run: |
          git clone https://github.com/66903202/ziye.git ~/ziye
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: npm install
        if: env. YDZ_yuedongzuTOKEN
        run: |
          cd ~/ziye
          npm install
      - name: '运行 【悦动族】'
        if: env. YDZ_yuedongzuTOKEN
        run: |
          cd ~/ziye
          node Task/yuedongzu.js
        env:
          
          PUSH_KEY: ${{ secrets.PUSH_KEY }}
          BARK_PUSH: ${{ secrets.BARK_PUSH }}
          TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
          TG_USER_ID: ${{ secrets.TG_USER_ID }}
          BARK_SOUND: ${{ secrets.BARK_SOUND }}
          DD_BOT_TOKEN: ${{ secrets.DD_BOT_TOKEN }}
          DD_BOT_SECRET: ${{ secrets.DD_BOT_SECRET }}
