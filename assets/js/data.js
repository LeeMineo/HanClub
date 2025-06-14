// data.js

// 분과별 동아리 목록
const departments = {
    "공연 분과": ["ZIZZY", "한울림"],
    "전시 분과": ["그림동아리A", "디자인B"],
    "종교 분과": ["CCC", "IVF"],
    "체육 분과": ["FC한동", "배드민턴부"],
    "학술 분과": ["CRA", "코딩연합"],
    "봉사 분과": ["나눔+", "해피트리"],
    "전산 분과": ["CRA", "알고리즘팀"],
    "아기동아리": ["새싹동아리1", "새싹동아리2"]
  };
  
  // 게시글 목록
  
const posts = [
    {
      club: "[전산분과] CRA",
      title: "리크루팅합니다",
      author: "이민서",
      date: "2025.06.04",
      type: "notice",
      content: `📢 2025-1 CRA 신입 모집 🚀
  
  💻CRA는 개발과 디자인을 함께 연구하는 전산 동아리입니다.
  📱실제 앱/웹 프로젝트에 참여하며 협업과 기술을 함께 익힙니다.
  
  ✅ 대상:
  - 개발/디자인에 관심 있는 분
  - 팀 프로젝트를 해보고 싶은 분
  - 스터디와 성장에 열정 있는 분
  
  지원을 기다립니다!`
    },
    {
      club: "[공연분과] ZIZZY",
      title: "신입모집 안내",
      author: "박지후",
      date: "2025.06.01",
      type: "notice",
      content: `🎤 ZIZZY 2025 신입부원 모집 🎉
  
  댄스/보컬을 함께하며 무대를 사랑하는 분들을 환영합니다!
  
  📅 활동: 정기 공연, 버스킹, 학내 축제 참여
  ✅ 지원 대상: 음악/퍼포먼스에 열정 있는 모든 학우
  
  지원서는 6월 5일까지 제출해주세요!`
    },
    {
      club: "[학술분과] CRA",
      title: "스터디 모집",
      author: "이민서",
      date: "2025.05.28",
      type: "post",
      content: `📚 학술 CRA에서 2025년 스터디원을 모집합니다!
  
  주제: 인공지능, 데이터 분석, 웹개발
  
  📆 활동: 주 1회 스터디, 프로젝트 발표
  📍 모집 마감: 5월 31일
  
  함께 공부하고 성장할 분을 기다려요!`
    },
    {
      club: "[봉사분과] 나눔+",
      title: "자원봉사자 모집",
      author: "정은지",
      date: "2025.05.20",
      type: "post",
      content: `🤝 지역사회 봉사활동 자원봉사자를 모집합니다.
  
  📍 활동 지역: 포항 시내
  🕒 활동 시간: 주말 오전 or 평일 오후
  🧾 봉사 시간 인증 제공
  
  마음 따뜻한 분들의 많은 관심 바랍니다.`
    },
    {
      club: "[체육분과] 합격",
      title: "풋살 동아리 리크루팅",
      author: "김민수",
      date: "2025.06.03",
      type: "notice",
      content: `⚽ 풋살 동아리에서 신입 부원을 모집합니다!
  
  📅 활동: 주 2회 운동, 교내 리그 참가
  💪 초보 환영! 실력보다 열정이 중요합니다.
  
  운동으로 스트레스 날려버리세요!`
    },
    {
      club: "[문화분과] 시네마",
      title: "영화 감상 모임",
      author: "한지민",
      date: "2025.05.25",
      type: "post",
      content: `🎬 영화 좋아하세요?
  
  매주 함께 영화 보고 토론하는 동아리입니다.
  장르 불문, 모두의 취향을 존중해요!
  
  🎟️ 매주 수요일 저녁 7시 활동!`
    },
    {
      club: "[종교분과] J.O.Y",
      title: "성경통독 멤버 모집",
      author: "이정은",
      date: "2025.06.02",
      type: "post",
      content: `📖 함께 성경을 읽고 나누는 동아리 J.O.Y
  
  🗓️ 매주 화요일 저녁 모임
  🕊️ 기도와 말씀, 교제를 나눕니다.
  
  마음의 위로가 필요한 분들, 환영합니다.`
    },
    {
      club: "[전산분과] CRA",
      title: "여름 프로젝트 팀 모집",
      author: "최영훈",
      date: "2025.06.06",
      type: "post",
      content: `🛠️ CRA 여름방학 프로젝트 팀원을 모집합니다!
  
  웹사이트, 앱 개발 등 실전 프로젝트
  
  💻 프론트엔드/백엔드/디자인 모두 환영!
  🔥 도전과 성장을 원하는 분은 연락 주세요!`
    },
    {
      club: "[자연분과] 그린리프",
      title: "텃밭 활동 참여자 모집",
      author: "박선우",
      date: "2025.05.18",
      type: "post",
      content: `🌱 작은 텃밭에서의 큰 힐링!
  
  매주 토요일 오전 텃밭 가꾸기 활동
  직접 채소를 심고 수확하며 자연을 느껴요.
  
  초보자도 환영입니다!`
    },
    {
      club: "[공연분과] ZIZZY",
      title: "댄스 워크샵 안내",
      author: "이서준",
      date: "2025.06.05",
      type: "notice",
      content: `🕺 ZIZZY 주최 무료 댄스 워크샵
  
  🗓️ 6월 10일 오후 6시
  📍 체육관 1층 연습실
  
  선착순 20명! 누구나 참여 가능합니다!`
    },
    {
      club: "[학술분과] TEDxHan",
      title: "연사 모집",
      author: "한지후",
      date: "2025.05.30",
      type: "notice",
      content: `🎤 TEDxHan 2025 연사 모집!
  
  자신의 이야기를 무대 위에서 전하고 싶은 분,
  지금 바로 지원하세요!
  
  📆 발표일: 6월 28일`
    },
    {
      club: "[봉사분과] 나눔+",
      title: "기부 캠페인 서포터즈",
      author: "김하은",
      date: "2025.05.26",
      type: "post",
      content: `🎁 기부 캠페인을 함께할 서포터즈를 모집합니다
  
  활동: 기획, 홍보, SNS 콘텐츠 제작
  기간: 6월~7월 (2개월)
  
  소중한 마음을 함께 나눠요.`
    },
    {
      club: "[체육분과] 합격",
      title: "운동장 청소 봉사 안내",
      author: "장태현",
      date: "2025.06.07",
      type: "post",
      content: `🧹 운동장 정기 청소 봉사
  
  📍 일시: 6월 9일 오전 10시
  📌 장소: 체육관 앞 잔디 운동장
  
  물, 장갑 제공. 참여 부탁드립니다!`
    },
    {
      club: "[문화분과] 북클럽",
      title: "6월 도서 안내",
      author: "서가은",
      date: "2025.05.29",
      type: "post",
      content: `📚 6월 북클럽 도서: <인간 실격>
  
  🗓️ 토론일: 6월 15일 오후 6시
  📍 장소: 학생회관 세미나실
  
  책을 통해 다양한 관점을 나눠요!`
    },
    {
      club: "[종교분과] 예수전도단",
      title: "찬양 모임 안내",
      author: "이준서",
      date: "2025.06.03",
      type: "post",
      content: `🎶 찬양과 기도의 밤
  
  매주 목요일 오후 8시
  한동채플에서 함께 찬양해요
  
  누구나 자유롭게 참여 가능!`
    }
  ];
  



//-------------------------------------------------------------------------

// 하드코딩된 유저 목록
const users = [
    {
        name: "하지원",
        email: "1234@gmail.com",
        password: "1234",
        department: "[체육분과] 합격",
        clubs: ["[체육분과] 합격", "[전산분과] CRA"],
        posts: [
          {
            club: "[전산분과] CRA",
            title: "리크루팅",
            author: "하지원",
            date: "2025.06.04",
            content: "CRA에서 2025년도 신입 리크루팅을 진행합니다. 많은 지원 바랍니다!"
          }
        ]
      },
    {
      name: "이민서",
      email: "5678@hanmail.net",
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
  
  