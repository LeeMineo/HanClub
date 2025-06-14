// data.js

// 분과별 동아리 목록
const departments = {
    "공연 분과": ["ZIZZY", "갓스펠로우", "꾼들", "두나미스", "레버리", "리퀴드", "미르", "소울", "어메이징 스토리", 
      "즉흥적 새벽 두시","피치파이프","하향", "한동대학교 응원단","한동 오케스트라","한풍", "Ammission", "G.O. (Great Order)", 
      "MIC (Motion In Christ)", "네오"],
    "전시 분과": ["CANVAS", "HAC", "VAM"],
    "종교 분과": ["비전선교단", "오르", "B2B (Back to the Bible)", "CCC", "SFC"],
    "체육 분과": ["그랜드슬램", "삼손 (SAMSON)", "스윕 (SWEEP)", "차요차요", "천풍해세", "한검", "한마지로", "한방 스윙스", "홀리램스 (HOLYRAMS)", 
      "H.MILAN","Hoops"],
    "학술 분과": ["펜통", "DUDUS"],
    "봉사 분과": ["청소년 자유학교", "팔레트", "피스메이커", "LAMP"],
    "전산 분과": ["CRA", "슬기짜기", "GHOST", "멋쟁이사자", "PARD"],
    "아기동아리": ["덜지니어스", "한동대배구동아리"]
  };
  
  // 게시글 목록
const posts = [
  {
    club: "[전산 분과] CRA",
    title: "👨‍💻 CRA 여름 리크루팅!",
    author: "이민서",
    date: "2025.06.04",
    type: "notice",
    content: `💻 CRA는 전산 기술에 진심인 사람들의 모임!

🔥 2025 여름 리크루팅 시작!
- 프로젝트 중심 학습
- 웹/앱 개발 실전 참여
- 협업을 통한 성장 💪

📅 지금 바로 지원하세요!`
  },
  {
    club: "[공연 분과] ZIZZY",
    title: "🎤 ZIZZY 신입 모집 안내",
    author: "김수진",
    date: "2025.06.01",
    type: "notice",
    content: `🎶 춤과 음악을 사랑하는 사람들 여기 모여라!

ZIZZY에서 당신의 끼를 펼쳐보세요💃🕺
📅 활동: 정기공연, 무대참여, 댄스 배틀 등
📍 초보 가능! 열정만 있으면 OK

📌 지금 지원해봐요!`
  },
  {
    club: "[종교 분과] CCC",
    title: "🙏 함께 기도하고 교제할 사람 모집",
    author: "정은혜",
    date: "2025.06.02",
    type: "post",
    content: `🕊️ 마음의 평안을 찾고 싶나요?
CCC는 매주 함께 기도하고 말씀을 나누는 공동체입니다.

📖 성경 공부
🎶 찬양과 예배
🧡 깊은 교제와 나눔

언제든 환영입니다!`
  },
  {
    club: "[전시 분과] CANVAS",
    title: "🎨 전시회 준비 멤버 구해요",
    author: "한유림",
    date: "2025.06.05",
    type: "post",
    content: `🖌️ 미술과 디자인을 사랑하나요?
CANVAS에서는 전시회 기획 및 참여 멤버를 모집 중입니다!

🖼️ 작품 창작 + 전시 준비
🎭 친구들과 협업
☕ 따뜻한 분위기 보장

👉 참여만 해도 감성 충전✨`
  },
  {
    club: "[봉사 분과] 피스메이커",
    title: "🤝 함께하는 봉사활동!",
    author: "최윤아",
    date: "2025.05.31",
    type: "post",
    content: `🧺 소외된 이웃과 함께하는 따뜻한 시간
피스메이커에서 당신의 손길이 필요해요!

📌 주말 지역 봉사
🌿 자연과 사람을 위한 실천

세상을 바꾸는 작은 발걸음, 함께해요. 🌍`
  },
  {
    club: "[체육 분과] 한검",
    title: "⚔️ 검도 동아리 리크루팅",
    author: "박준영",
    date: "2025.06.06",
    type: "notice",
    content: `🏯 한검은 검도를 통해 정신과 체력을 단련하는 모임입니다.

👊 주 2회 연습
👥 초보자도 환영!
💥 열정만 가지고 오세요!

⚔️ 칼처럼 날카롭게 성장하고 싶다면 지금 지원하세요!`
  },
    {
      "club": "[공연분과] 리퀴드",
      "title": "🎭 공연 기획 안내",
      "author": "이윤지",
      "date": "2025.06.08",
      "type": "notice",
      "content": "🎭 공연 기획 안내\n\n예술적인 공연을 준비 중이에요! 함께 무대를 꾸며봐요!\n\n📅 작성일: 2025.06.08"
    },
    {
      "club": "[전시분과] VAM",
      "title": "🖼️ 전시 참여자 모집",
      "author": "최예린",
      "date": "2025.06.06",
      "type": "post",
      "content": "🖼️ 전시 참여자 모집\n\n캔버스 위의 자유를 표현할 전시를 준비 중입니다. 많은 참여 부탁드려요!\n\n📅 작성일: 2025.06.06"
    },
    {
      "club": "[체육분과] 한검",
      "title": "⚔️ 검도 체험 세션 안내",
      "author": "강성훈",
      "date": "2025.06.03",
      "type": "notice",
      "content": "⚔️ 검도 체험 세션 안내\n\n처음이라도 괜찮아요! 기본 자세부터 함께 배워봐요!\n\n📅 작성일: 2025.06.03"
    },
    {
      "club": "[봉사분과] 피스메이커",
      "title": "🤝 평화 봉사 캠프 안내",
      "author": "문다희",
      "date": "2025.05.30",
      "type": "post",
      "content": "🤝 평화 봉사 캠프 안내\n\n다양한 지역에서 봉사활동을 진행합니다. 따뜻한 마음을 전해주세요.\n\n📅 작성일: 2025.05.30"
    },
    {
      "club": "[전산분과] GHOST",
      "title": "👻 웹 해킹 기초 세션",
      "author": "김태호",
      "date": "2025.06.04",
      "type": "notice",
      "content": "👻 웹 해킹 기초 세션\n\n기초적인 보안 지식을 배우고 싶다면 꼭 참여하세요!\n\n📅 작성일: 2025.06.04"
    },
    {
      "club": "[아기동아리] 한동대배구동아리",
      "title": "🏐 배구 새내기 모집",
      "author": "정예진",
      "date": "2025.06.07",
      "type": "post",
      "content": "🏐 배구 새내기 모집\n\n초보도 환영! 함께 뛰고 웃으며 배구를 배워봐요!\n\n📅 작성일: 2025.06.07"
    },
    {
      "club": "[종교분과] CCC",
      "title": "🙏 새벽 기도회 안내",
      "author": "박정우",
      "date": "2025.06.02",
      "type": "notice",
      "content": "🙏 새벽 기도회 안내\n\n매주 수요일 아침, 함께 기도하며 하루를 시작해요.\n\n📅 작성일: 2025.06.02"
    },
    {
      "club": "[학술분과] DUDUS",
      "title": "📘 인문학 세미나 공지",
      "author": "김혜원",
      "date": "2025.06.01",
      "type": "post",
      "content": "📘 인문학 세미나 공지\n\n이번 주 주제는 ‘철학과 일상’. 함께 생각을 나눠요!\n\n📅 작성일: 2025.06.01"
    },
    {
      "club": "[전시분과] HAC",
      "title": "🎨 드로잉 클래스 오픈",
      "author": "이서현",
      "date": "2025.05.31",
      "type": "notice",
      "content": "🎨 드로잉 클래스 오픈\n\n선과 면으로 마음을 그려봐요. 무료 체험 수업 열립니다!\n\n📅 작성일: 2025.05.31"
    },
    {
      "club": "[봉사분과] LAMP",
      "title": "💡 야간 학습 봉사자 모집",
      "author": "조민재",
      "date": "2025.06.05",
      "type": "post",
      "content": "💡 야간 학습 봉사자 모집\n\n지역 아동에게 야간 학습지도를 함께해요. 보람 가득!\n\n📅 작성일: 2025.06.05"
    }
  
  ];
  

//-------------------------------------------------------------------------

// 하드코딩된 유저 목록 (1조 한동대영 팀원 실제 동아리.)
const users = [
    {
        name: "하지원",
        email: "1234@gmail.com",
        password: "1234",
        department: "[체육분과] 한검",
        clubs: ["[체육분과] 한검"],
        posts: [
          {
            club: "[체육분과] 한검",
            title: "리크루팅",
            author: "하지원",
            date: "2025.06.04",
            content: "한검 에서 2025년도 신입 리크루팅을 진행합니다. 많은 지원 바랍니다!"
          }
        ]
      },
    {
      name: "이민서",
      email: "5678@gmail.com",
      password: "5678",
      department: "[전산분과] CRA",
      clubs: ["[전산분과] CRA", "[공연분과]ZIZZY"],
      posts: [
        {
          club: "[전산분과] CRA",
          title: "리크루팅",
          author: "이민서",
          date: "2025.06.04",
          content: "전산분과 CRA에서 함께할 동아리원을 모집합니다. 자세한 사항은 공지 확인!"
        },
        {
          club: "[전산분과] CRA",
          title: "리크루팅",
          author: "이민서",
          date: "2025.06.04",
          content: "면접 일정은 추후 안내될 예정입니다. 카카오톡 오픈채팅도 확인해주세요."
        }
      ]
    },
    {
      name: "허성우",
      email: "0000@gmail.com",
      password: "0000",
      department: "[체육분과] 한검",
      clubs: ["[체육분과] 한검"],
      posts: [
        {
          club: "[체육분과] 한검",
          title: "리크루팅",
          author: "하지원",
          date: "2025.06.04",
          content: "한검 에서 2025년도 신입 리크루팅을 진행합니다. 많은 지원 바랍니다!"
        }
      ]
    },
    {
      name: "김유현",
      email: "yuhyun@gmail.com",
      password: "1234",
      department: "[무소속] 한검",
      clubs: ["[무소속] 없음"],
      posts: [

      ]
    }
  ];
  
  
// 로그인 함수
function login(email, password) {
    return users.find(user => user.email === email && user.password === password);
  }
  
// 로그인 상태 저장
function saveLogin(user) {
    localStorage.setItem("loginUser", JSON.stringify(user));
  }
  
// 로그인 상태 가져오기
function getLoginUser() {
    return JSON.parse(localStorage.getItem("loginUser"));
  }
  
  // 로그아웃
function logout() {
    localStorage.removeItem("loginUser");
  }

// 로그인한 사용자 가져오기
function getLoginUser() {
    return JSON.parse(localStorage.getItem("loginUser"));
  }
  
// 로그인 여부 확인
function isLoggedIn() {
    return !!getLoginUser();  // 로그인되어 있으면 true
  }
  
  