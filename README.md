# commit-gym

**Git/GitHub 반복 훈련장**

commit-gym은 Git/GitHub를 처음 배우는 사람이 브라우저에서 전체 작업 흐름을 반복 연습하는 정적 웹앱입니다. 실제 명령어는 실행하지 않으므로 실수해도 안전합니다.

## 학습 목표

- `pwd`, `cd`, `mkdir` 등 프로젝트 시작 전 필요한 CLI 기본 익히기
- `git init`부터 첫 commit까지의 흐름 이해하기
- local repository와 GitHub remote repository 연결하기
- `status → diff → add → commit → push` 기본 루틴 반복하기
- `clone`, `pull`, remote와 `.git` 폴더의 역할 이해하기
- 초보자가 자주 만나는 오류를 읽고 해결 방향 찾기

## 주요 기능

- 8개의 실제 상황 기반 명령어 입력 훈련
- 공백과 대소문자를 너그럽게 처리하는 정답 확인
- 폴더명, commit 메시지, repository URL을 자유롭게 입력하는 형식 검증
- 여러 줄을 한 번에 설명하는 명령어 매뉴얼
- Git/GitHub 핵심 개념 및 자주 만나는 오류 카드
- 정답 설명이 포함된 5문제 미니 퀴즈
- 브라우저 `localStorage`를 이용한 훈련 진행률 저장

## 파일 구조

```text
commit-gym/
├── index.html   # 화면 구조
├── style.css    # 반응형 UI 스타일
├── app.js       # 명령어, 시나리오, 퀴즈 데이터와 동작
└── README.md    # 프로젝트 안내
```

## 로컬에서 실행하기

별도 설치나 빌드 과정이 없습니다. `index.html`을 직접 열거나 간단한 정적 서버를 실행하세요.

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속합니다.

## GitHub Pages 배포 방법

1. 이 폴더를 GitHub repository에 push합니다.
2. GitHub repository의 **Settings → Pages**로 이동합니다.
3. **Build and deployment**에서 **Deploy from a branch**를 선택합니다.
4. `main` branch와 `/ (root)` 폴더를 선택하고 저장합니다.
5. 잠시 뒤 표시되는 공개 주소로 접속합니다.

## 초보자용 사용 방법

1. 첫 화면의 **오늘의 훈련 메뉴**에서 연습할 상황을 고릅니다.
2. **지금 할 일**을 읽고 터미널 입력창에 명령어를 직접 입력합니다.
3. 막히면 **힌트 보기**를 누르고, 완료 후 **다시 연습**으로 반복합니다.
4. 기억나지 않는 명령어는 **명령어 매뉴얼**에 한 줄 또는 여러 줄로 입력합니다.
5. 개념 노트와 오류 카드를 읽고 마지막에 미니 퀴즈로 확인합니다.

> commit-gym은 학습용 시뮬레이션입니다. 입력한 Git/CLI 명령어를 실제 컴퓨터에서 실행하지 않습니다.
