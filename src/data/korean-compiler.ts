export const koreanCompiler = {
  "title": "한국어 문법 컴파일러 확장",
  "href": "/projects/korean-compiler/",
  "description": "수업용 CBU 컴파일러를 바탕으로 연산자 우선순위, 한국어 조건문·반복문과 코드 생성을 확장한 프로젝트입니다.",
  "period": "2023.05",
  "repository": "https://github.com/NyanPunch/2023_MYCompiler",
  "technologies": [
    "C",
    "Lex / Flex",
    "Yacc / Bison",
    "구문 트리",
    "코드 생성"
  ],
  "features": [
    {
      "title": "산술 연산과 우선순위",
      "syntax": "더하기 · 빼기 · 곱하기 · 나누기 / + − * /",
      "description": "expr → term → factor로 문법을 나눠 곱셈·나눗셈이 덧셈·뺄셈보다 먼저 묶이도록 구성했습니다."
    },
    {
      "title": "한국어 조건문",
      "syntax": "만일 가 는 나 보다 크거나같다면 … 이다",
      "description": "비교 연산 여섯 가지를 토큰과 문법 규칙으로 연결하고, 조건에 따라 분기 명령과 종료 레이블을 생성합니다."
    },
    {
      "title": "조건 기반 반복문",
      "syntax": "i 는 10 보다 작은 동안 … 반복한다",
      "description": "조건 검사와 본문을 구문 트리로 만들고, 반복 시작·탈출 레이블 및 되돌아가는 분기 명령을 출력합니다."
    },
    {
      "title": "증감·복합 대입",
      "syntax": "++ · -- · += · -= · *= · /=",
      "description": "변수의 주소와 현재 값을 스택에 올린 뒤 연산 결과를 대입하는 코드 생성 규칙을 추가했습니다."
    },
    {
      "title": "숫자 출력",
      "syntax": "출력 변수명; / 출력 숫자;",
      "description": "PRINT factor 규칙을 통해 변수나 정수를 출력하는 OUTNUM 명령을 생성합니다."
    }
  ],
  "milestones": [
    {
      "date": "05.09",
      "title": "곱셈·나눗셈 추가",
      "description": "Lex와 Yacc에 연산 토큰·문법 추가"
    },
    {
      "date": "05.10",
      "title": "연산자 우선순위 반영",
      "description": "곱셈·나눗셈의 결합 순서 구성"
    },
    {
      "date": "05.14",
      "title": "출력문과 조건문 추가",
      "description": "숫자 출력과 한국어 조건문 확장"
    },
    {
      "date": "05.22",
      "title": "한국어 비교 표현 보강",
      "description": "같음·다름·대소 비교 표현 정리"
    },
    {
      "date": "05.23",
      "title": "반복문과 증감 연산 추가",
      "description": "동안 … 반복한다, ++·-- 지원"
    }
  ],
  "examples": [
    {
      "title": "01 · 산술식과 연산자 우선순위",
      "description": "원본 sample.cbu. 변수 대입과 한국어 산술 표현을 확인하는 예제입니다.",
      "code": "시작\n\n가:=10;\n나:=가 더하기 20 곱하기 2;\n\n끝",
      "url": "https://github.com/NyanPunch/2023_MYCompiler/blob/aaf7d2a5f2b0fd8f15f06f09251e0c842ccfcf8b/sample.cbu"
    },
    {
      "title": "02 · 한국어 조건문과 중첩 조건",
      "description": "원본 sample2.cbu. 비교 표현, 중첩 조건문과 숫자 출력을 포함합니다.",
      "code": "시작\n\na:=2;\nb:=2;\n만약에 a 는 b 보다 같으면 a:=5;이다\n\n가:=3;\n나:=3;\n만일 나 는 가 보다 같다면\n가:=6;\n이다\n\n다:=9;\n라:=9;\n만일 다 는 라 보다 작다면\n다:=10;\n이다\n\n만약에 다 는 라 보다 작거나같으면\n다:= 15;\n이다\n\n출력 다;\n\nA:=10;\nB:=3;\nC:=10;\n만일 A 는 B 보다 다르면\n\t만일 A 는 C 보다 다르면\n\t\tA:=15;\n\t\t출력 A;\n\t이다\n\t출력 A;\n이다\n\n만약에 A 더하기 B 는 C 보다 크다면 C:=A 더하기 B; 이다\n\n끝",
      "url": "https://github.com/NyanPunch/2023_MYCompiler/blob/aaf7d2a5f2b0fd8f15f06f09251e0c842ccfcf8b/sample2.cbu"
    },
    {
      "title": "03 · 증감·복합 대입과 반복문",
      "description": "원본 sample3.cbu. i가 10보다 작은 동안 합을 누적하는 문법이 포함돼 있습니다.",
      "code": "시작\n\n증가:=5;\n증가++;\n\n감소:=5;\n감소--;\n\n합:=35;\n합+=10;\n\n차:=30;\n차-=20;\n\n곱:=2;\n곱*=6;\n\n나눔:=100;\n나눔/=5;\n\n합:=0;\ni:=1;\ni 는 10 보다 작은 동안\n합+=i;\ni++;\n반복한다\n\n끝",
      "url": "https://github.com/NyanPunch/2023_MYCompiler/blob/aaf7d2a5f2b0fd8f15f06f09251e0c842ccfcf8b/sample3.cbu"
    }
  ],
  "sources": [
    {
      "label": "개발 기록과 남은 과제",
      "file": "README.md",
      "description": "기능 추가 날짜와 작업 범위",
      "url": "https://github.com/NyanPunch/2023_MYCompiler/blob/aaf7d2a5f2b0fd8f15f06f09251e0c842ccfcf8b/README.md"
    },
    {
      "label": "어휘 분석 규칙",
      "file": "cbu2.l",
      "description": "한국어 키워드·연산자와 토큰 연결",
      "url": "https://github.com/NyanPunch/2023_MYCompiler/blob/aaf7d2a5f2b0fd8f15f06f09251e0c842ccfcf8b/cbu2.l"
    },
    {
      "label": "문법·구문 트리·코드 생성",
      "file": "cbu2.y",
      "description": "우선순위, 조건·반복문과 스택 명령 생성",
      "url": "https://github.com/NyanPunch/2023_MYCompiler/blob/aaf7d2a5f2b0fd8f15f06f09251e0c842ccfcf8b/cbu2.y"
    },
    {
      "label": "Visual Studio 프로젝트",
      "file": "Project1/Project1.vcxproj",
      "description": "Win32·x64 빌드 구성",
      "url": "https://github.com/NyanPunch/2023_MYCompiler/blob/aaf7d2a5f2b0fd8f15f06f09251e0c842ccfcf8b/Project1/Project1.vcxproj"
    }
  ]
};
