# commit-gym

commit-gym은 Git/GitHub를 처음 배우는 사람이 기본 명령어를 반복해서 연습할 수 있는 Python CLI 프로그램입니다.

실제 Git 명령어를 실행하지 않고, 사용자가 입력한 문자열이 정답과 일치하는지만 확인합니다. 그래서 Git 저장소가 아니어도 안전하게 연습할 수 있습니다.

## 실행 방법

터미널에서 `commit-gym` 폴더로 이동한 뒤 실행합니다.

```bash
cd commit-gym
python main.py
```

환경에 따라 `python3` 명령어를 사용해야 할 수도 있습니다.

```bash
python3 main.py
```

## 메뉴

```text
1. Practice basic Git routine
2. Show Git command manual
3. Take a simple quiz
0. Exit
```

프로그램 진행 중 어느 입력 화면에서든 `q`를 입력하면 바로 종료할 수 있습니다. 터미널 단축키 `Ctrl+C`로도 종료할 수 있습니다.

## 연습할 수 있는 Git 기본 루틴

commit-gym의 첫 버전에서는 아래 5개 명령어를 집중적으로 연습합니다.

1. `git status`
2. `git diff`
3. `git add .`
4. `git commit -m "message"`
5. `git push`

루틴 4의 commit message는 매번 달라질 수 있으므로, 연습할 때는 짧은 메시지 예시를 랜덤으로 보여 줍니다. 사용자가 입력한 message 문구가 예시와 똑같은지는 검사하지 않고, `git commit -m "..."` 형식인지 확인합니다.

## 기능

### 1. Practice basic Git routine

기본 Git 루틴을 순서대로 입력해 보는 연습입니다.

정답을 입력하면 `정답입니다`와 짧은 설명을 보여 줍니다. 그리고 현재까지 입력한 루틴을 누적해서 보여 줍니다. 틀리면 `틀렸습니다`, 올바른 명령어, 짧은 설명을 보여 줍니다.

### 2. Show Git command manual

5개 기본 명령어에 대해 다음 내용을 보여 줍니다.

- 명령어
- 언제 사용하는지
- 간단한 설명

### 3. Take a simple quiz

Git 기본 명령어에 대한 5문제 객관식 퀴즈를 풉니다.

각 문제마다 정답 여부를 알려 주고, 마지막에 점수를 보여 줍니다.

## 향후 추가하면 좋을 기능

- 난이도별 연습 모드
- 더 많은 Git 명령어 추가
- 자주 틀린 문제 다시 풀기
- GitHub Pull Request 흐름 연습
- 실제 예시 상황을 보고 알맞은 명령어 고르기
