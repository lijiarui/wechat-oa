const express = require('express')
const wechat = require('wechat')
const app = express()
const config = {
	token: 'wechat', 
	appid: 'wx4369a7d8a2331169', 
	encodingAESKey: 'H1RdC0azpPwWEohbocVF9MJAkqXIOnDgG0RGD02seAU', 
	checkSignature: true // Option
}

app.use(express.query())
app.use('/', wechat(config, function (req, res, next) {
	console.log(req.weixin)

	if (req.weixin.Content === 'text') {
		res.reply({
			content: '你好，Hello World!',
			type: 'text'
		})
	}

	if (req.weixin.Content === 'voice') {
		res.reply({
			content: { mediaId: '9seTBfhw1KmTiaORRo4dPXwULfy4DQnyjcnPPJjjT9gwoqU2WXRTEqfwxV2pRQbZ' },
			type: 'voice'
		})
	}

	if (req.weixin.Content === 'image') {
		res.reply({
			content: { mediaId: '73YlTk1qniHG_EzB4PzxKG8_bYbJy_AW01gr0R8yR-aat7N_BcaFY9Ei_GaXyZl7' },
			type: 'image'
		})
	}
}))

const port = 80
app.listen(port)
console.log(`Server listening at http://127.0.0.1:${port}`)