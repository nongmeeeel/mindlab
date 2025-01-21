const express = require('express');
const router = express.Router();
const axios = require('axios');

// 카카오페이 설정
const KAKAO_ADMIN_KEY = process.env.KAKAO_ADMIN_KEY;
const KAKAO_PAY_HOST = 'https://kapi.kakao.com/v1/payment/ready';

// 포트원 API 키 설정
const PORTONE_API_KEY = process.env.PORTONE_API_KEY;
const PORTONE_SECRET_KEY = process.env.PORTONE_SECRET_KEY;

router.post('/kakao/ready', async (req, res) => {
  try {
    const {
      amount,
      orderName,
      customerName,
      successUrl,
      failUrl,
      cancelUrl,
    } = req.body;

    const response = await axios.post(
      KAKAO_PAY_HOST,
      {
        cid: 'TC0ONETIME', // 테스트용 가맹점 코드
        partner_order_id: `ORDER_${Date.now()}`,
        partner_user_id: customerName,
        item_name: orderName,
        quantity: 1,
        total_amount: amount,
        tax_free_amount: 0,
        approval_url: successUrl,
        fail_url: failUrl,
        cancel_url: cancelUrl,
      },
      {
        headers: {
          Authorization: `KakaoAK ${KAKAO_ADMIN_KEY}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('카카오페이 요청 실패:', error);
    res.status(500).json({ error: '결제 요청에 실패했습니다.' });
  }
});

// 결제 성공 처리
router.get('/success', async (req, res) => {
  // 결제 승인 요청 및 DB 처리
  // pg_token을 이용한 결제 승인 처리
});

// 결제 검증 엔드포인트
router.post('/verify', async (req, res) => {
  try {
    const { imp_uid, merchant_uid } = req.body;
    
    // 포트원 액세스 토큰 발급
    const getToken = await axios.post('https://api.iamport.kr/users/getToken', {
      imp_key: PORTONE_API_KEY,
      imp_secret: PORTONE_SECRET_KEY,
    });
    
    const { access_token } = getToken.data.response;
    
    // 결제 정보 조회
    const getPaymentData = await axios.get(`https://api.iamport.kr/payments/${imp_uid}`, {
      headers: { Authorization: access_token }
    });
    
    const paymentData = getPaymentData.data.response;
    
    // 결제금액 검증
    const orderAmount = paymentData.amount;
    const expectedAmount = 5000; // DB에서 조회하거나 상수로 관리
    
    if (orderAmount === expectedAmount) {
      // DB에 결제 정보 저장
      // 사용자의 프리미엄 상태 업데이트
      res.json({ success: true });
    } else {
      throw new Error('결제금액 불일치');
    }
  } catch (error) {
    console.error('결제 검증 실패:', error);
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router; 