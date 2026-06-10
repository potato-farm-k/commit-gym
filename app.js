const commandManual = [
  {
    id: "pwd",
    command: "pwd",
    match: /^pwd$/i,
    meaning: "현재 터미널이 어느 폴더를 보고 있는지 경로를 보여줍니다.",
    when: "길을 잃었거나 명령어를 실행하기 전에 현재 위치를 확인할 때",
    example: "프로젝트 폴더 안에 제대로 들어왔는지 확인할 때",
    caution: "위치를 바꾸는 명령어가 아니라 확인만 하는 명령어예요.",
    next: ["ls", "cd 폴더명"]
  },
  {
    id: "ls",
    command: "ls",
    match: /^ls(?:\s+.*)?$/i,
    meaning: "현재 폴더 안에 있는 파일과 폴더를 보여줍니다.",
    when: "어떤 폴더로 이동할지 또는 파일이 있는지 확인할 때",
    example: "cd 명령어를 쓰기 전에 정확한 폴더 이름을 찾을 때",
    caution: "숨김 파일은 기본 ls 결과에 보이지 않을 수 있어요.",
    next: ["cd 폴더명", "pwd"]
  },
  {
    id: "cd-up",
    command: "cd ..",
    match: /^cd\s+\.\.$/i,
    meaning: "현재 폴더의 바로 위 상위 폴더로 이동합니다.",
    when: "현재 위치에서 한 단계 뒤로 나가고 싶을 때",
    example: "projects/commit-gym에서 projects로 돌아갈 때",
    caution: "점 두 개 사이에는 공백이 없어요.",
    next: ["pwd", "ls"]
  },
  {
    id: "cd",
    command: "cd 폴더명",
    match: /^cd\s+(?!\.\.$)\S.+$|^cd\s+\S+$/i,
    meaning: "터미널의 현재 위치를 원하는 폴더로 이동합니다.",
    when: "Git 명령어를 실행할 프로젝트 폴더로 들어갈 때",
    example: "cd commit-gym으로 프로젝트 폴더에 들어갈 때",
    caution: "폴더 이름에 공백이 있다면 따옴표로 감싸세요.",
    next: ["pwd", "ls", "git status"]
  },
  {
    id: "mkdir",
    command: "mkdir 폴더명",
    match: /^mkdir\s+\S.+$|^mkdir\s+\S+$/i,
    meaning: "새 폴더를 만듭니다.",
    when: "새 프로젝트를 시작할 빈 폴더가 필요할 때",
    example: "mkdir my-project로 프로젝트 폴더를 만들 때",
    caution: "같은 이름의 폴더가 이미 있으면 만들 수 없어요.",
    next: ["cd 폴더명", "ls"]
  },
  {
    id: "touch",
    command: "touch 파일명",
    match: /^touch\s+\S.+$|^touch\s+\S+$/i,
    meaning: "비어 있는 새 파일을 만들거나 기존 파일의 수정 시간을 갱신합니다.",
    when: "README.md 같은 파일을 빠르게 만들 때",
    example: "touch README.md로 안내 파일을 만들 때",
    caution: "같은 이름의 파일이 있어도 내용을 지우지는 않아요.",
    next: ["code .", "git status"]
  },
  {
    id: "mv",
    command: "mv 원래이름 새이름",
    match: /^mv\s+\S+\s+\S+/i,
    meaning: "파일이나 폴더의 이름을 바꾸거나 다른 위치로 옮깁니다.",
    when: "파일 이름을 정리하거나 위치를 이동할 때",
    example: "mv old.md README.md로 파일 이름을 바꿀 때",
    caution: "대상에 같은 이름의 파일이 있으면 덮어쓸 수 있어요.",
    next: ["ls", "git status"],
    warning: true
  },
  {
    id: "cp",
    command: "cp 원본 대상",
    match: /^cp\s+\S+\s+\S+/i,
    meaning: "파일이나 폴더를 복사합니다.",
    when: "원본을 남겨두고 복사본을 만들 때",
    example: "cp README.md README-backup.md로 백업할 때",
    caution: "폴더 전체 복사는 보통 cp -r 옵션이 필요해요.",
    next: ["ls", "git status"]
  },
  {
    id: "rm",
    command: "rm 파일명",
    match: /^rm\s+\S+/i,
    meaning: "파일을 삭제합니다.",
    when: "정말 필요 없는 파일을 터미널에서 지울 때",
    example: "rm temp.txt로 임시 파일을 삭제할 때",
    caution: "휴지통을 거치지 않습니다. 실행 전에 파일 이름을 꼭 확인하세요.",
    next: ["ls", "git status"],
    warning: true
  },
  {
    id: "clear",
    command: "clear",
    match: /^clear$/i,
    meaning: "터미널 화면에 쌓인 글자를 깨끗하게 정리합니다.",
    when: "출력이 너무 많아 화면을 새로 보고 싶을 때",
    example: "새 작업을 시작하기 전에 터미널 화면을 정리할 때",
    caution: "이전 명령 기록이 삭제되는 것은 아니에요.",
    next: ["pwd", "git status"]
  },
  {
    id: "code",
    command: "code .",
    match: /^code\s+\.$/i,
    meaning: "현재 폴더를 VS Code에서 엽니다.",
    when: "터미널에서 이동한 프로젝트를 바로 편집하고 싶을 때",
    example: "프로젝트 폴더 안에서 code .을 입력할 때",
    caution: "VS Code의 code 명령어가 설치되어 있어야 해요.",
    next: ["git status"]
  },
  {
    id: "git-status",
    command: "git status",
    match: /^git\s+status$/i,
    meaning: "현재 Git 저장소의 변경 상태를 확인합니다.",
    when: "작업 전, 작업 중, 작업 후에 현재 상황을 확인할 때",
    example: "어떤 파일이 바뀌었고 commit 준비가 되었는지 볼 때",
    caution: "Git 저장소 밖에서 실행하면 not a git repository 오류가 나요.",
    next: ["git diff", "git add .", "git commit -m \"메시지\""]
  },
  {
    id: "git-diff",
    command: "git diff",
    match: /^git\s+diff$/i,
    meaning: "아직 add하지 않은 파일의 구체적인 변경 내용을 보여줍니다.",
    when: "commit 전에 내가 무엇을 수정했는지 검토할 때",
    example: "실수로 지운 문장이 없는지 확인할 때",
    caution: "이미 add한 변경은 기본 git diff에 보이지 않을 수 있어요.",
    next: ["git add .", "git status"]
  },
  {
    id: "git-log-oneline",
    command: "git log --oneline",
    match: /^git\s+log\s+--oneline$/i,
    meaning: "commit 기록을 한 줄씩 간단하게 보여줍니다.",
    when: "전체 기록의 흐름을 빠르게 훑어볼 때",
    example: "최근 commit 메시지들을 간단히 확인할 때",
    caution: "기록을 바꾸지 않고 읽기만 하는 안전한 명령어예요.",
    next: ["git status", "git log"]
  },
  {
    id: "git-log",
    command: "git log",
    match: /^git\s+log$/i,
    meaning: "commit 작성자, 시간, 메시지 등 상세 기록을 보여줍니다.",
    when: "프로젝트의 작업 기록을 자세히 확인할 때",
    example: "특정 변경이 언제 저장됐는지 찾을 때",
    caution: "화면에서 나가려면 q 키를 누르세요.",
    next: ["git log --oneline", "git status"]
  },
  {
    id: "git-init",
    command: "git init",
    match: /^git\s+init$/i,
    meaning: "현재 폴더에서 Git 기록 관리를 시작합니다.",
    when: "아직 Git 저장소가 아닌 새 프로젝트를 Git으로 관리할 때",
    example: "새 프로젝트 폴더를 만든 직후",
    caution: "GitHub와 연결되는 것은 아닙니다. 로컬 Git만 시작해요.",
    next: ["git status", "git add .", "git remote add origin 저장소주소"]
  },
  {
    id: "git-config-name",
    command: "git config --global user.name \"이름\"",
    match: /^git\s+config\s+--global\s+user\.name\s+.+$/i,
    meaning: "내 컴퓨터에서 만들 commit에 표시할 이름을 설정합니다.",
    when: "Git을 처음 설치했거나 작성자 이름을 바꿀 때",
    example: "git config --global user.name \"Gordon\"",
    caution: "한 컴퓨터 전체에 적용되는 설정입니다.",
    next: ["git config --global user.email \"이메일\"", "git init"]
  },
  {
    id: "git-config-email",
    command: "git config --global user.email \"이메일\"",
    match: /^git\s+config\s+--global\s+user\.email\s+.+$/i,
    meaning: "내 컴퓨터에서 만들 commit에 표시할 이메일을 설정합니다.",
    when: "Git을 처음 설치했거나 작성자 이메일을 바꿀 때",
    example: "GitHub 계정 이메일과 맞춰 commit을 연결할 때",
    caution: "공개 저장소에서는 이메일 노출 설정도 확인하세요.",
    next: ["git init", "git status"]
  },
  {
    id: "git-add-all",
    command: "git add .",
    match: /^git\s+add\s+\.$/i,
    meaning: "현재 폴더 아래의 변경 파일을 commit 준비 영역에 올립니다.",
    when: "여러 변경을 다음 commit에 함께 담고 싶을 때",
    example: "수정한 README와 CSS를 한 번에 준비할 때",
    caution: "원하지 않는 파일까지 포함될 수 있으니 먼저 git status를 확인하세요.",
    next: ["git status", "git commit -m \"메시지\""]
  },
  {
    id: "git-add-file",
    command: "git add 파일명",
    match: /^git\s+add\s+(?!\.$)\S+/i,
    meaning: "지정한 파일만 commit 준비 영역에 올립니다.",
    when: "여러 변경 중 일부만 골라서 commit하고 싶을 때",
    example: "git add README.md로 README만 준비할 때",
    caution: "파일 이름을 정확히 입력해야 해요.",
    next: ["git status", "git commit -m \"메시지\""]
  },
  {
    id: "git-commit",
    command: "git commit -m \"메시지\"",
    match: /^git\s+commit\s+-m\s+(['"]).+\1$/i,
    meaning: "add로 준비한 변경을 메시지와 함께 로컬 기록으로 저장합니다.",
    when: "하나의 의미 있는 작업 단위가 끝났을 때",
    example: "git commit -m \"update README\"",
    caution: "무엇을 바꿨는지 알 수 있는 짧고 분명한 메시지를 쓰세요.",
    next: ["git status", "git push"]
  },
  {
    id: "git-remote-v",
    command: "git remote -v",
    match: /^git\s+remote\s+-v$/i,
    meaning: "현재 로컬 저장소에 연결된 remote 주소를 확인합니다.",
    when: "어느 GitHub repository와 연결되어 있는지 확인할 때",
    example: "push 전에 origin 주소가 맞는지 확인할 때",
    caution: "아무것도 나오지 않으면 remote가 아직 없는 상태예요.",
    next: ["git remote add origin 저장소주소", "git push"]
  },
  {
    id: "git-remote-set",
    command: "git remote set-url origin 저장소주소",
    match: /^git\s+remote\s+set-url\s+origin\s+\S+$/i,
    meaning: "이미 등록된 origin의 주소를 다른 주소로 바꿉니다.",
    when: "repository 주소가 바뀌었거나 잘못 연결했을 때",
    example: "새 GitHub repository 주소로 origin을 교체할 때",
    caution: "주소를 바꾼 뒤 git remote -v로 다시 확인하세요.",
    next: ["git remote -v", "git push"]
  },
  {
    id: "git-remote-add",
    command: "git remote add origin 저장소주소",
    match: /^git\s+remote\s+add\s+origin\s+\S+$/i,
    meaning: "로컬 Git 저장소에 origin이라는 GitHub 주소를 처음 등록합니다.",
    when: "git init한 로컬 프로젝트를 GitHub repository와 연결할 때",
    example: "git remote add origin https://github.com/user/repo.git",
    caution: "origin이 이미 있으면 set-url을 사용해야 해요.",
    next: ["git remote -v", "git branch -M main", "git push -u origin main"]
  },
  {
    id: "git-remote-remove",
    command: "git remote remove origin",
    match: /^git\s+remote\s+remove\s+origin$/i,
    meaning: "등록된 origin 연결을 삭제합니다.",
    when: "잘못 연결한 remote를 완전히 지우고 다시 설정할 때",
    example: "다른 사람의 repository와 잘못 연결했을 때",
    caution: "GitHub의 repository가 삭제되는 것은 아니지만 push 연결이 사라져요.",
    next: ["git remote -v", "git remote add origin 저장소주소"],
    warning: true
  },
  {
    id: "git-branch-main",
    command: "git branch -M main",
    match: /^git\s+branch\s+-m\s+main$/i,
    meaning: "현재 branch의 이름을 main으로 바꿉니다.",
    when: "GitHub의 기본 branch 이름과 맞추고 싶을 때",
    example: "처음 GitHub에 push하기 전에 branch 이름을 main으로 정리할 때",
    caution: "-M은 기존 main이 있어도 강제로 이름을 바꿀 수 있어요.",
    next: ["git push -u origin main", "git status"]
  },
  {
    id: "git-push-first",
    command: "git push -u origin main",
    match: /^git\s+push\s+-u\s+origin\s+main$/i,
    meaning: "main branch를 origin에 처음 올리고 앞으로의 기본 연결을 설정합니다.",
    when: "remote를 연결한 뒤 처음 push할 때",
    example: "이후에는 git push만 써도 되도록 첫 연결을 만들 때",
    caution: "remote 주소와 branch 이름이 올바른지 먼저 확인하세요.",
    next: ["git push", "git status"]
  },
  {
    id: "git-push",
    command: "git push",
    match: /^git\s+push$/i,
    meaning: "내 컴퓨터의 새 commit을 연결된 GitHub repository에 올립니다.",
    when: "로컬 commit을 다른 사람과 공유하거나 백업할 때",
    example: "작업 루틴 마지막에 GitHub로 업로드할 때",
    caution: "commit하지 않은 변경 파일은 push되지 않아요.",
    next: ["git status", "git pull"]
  },
  {
    id: "git-pull",
    command: "git pull",
    match: /^git\s+pull$/i,
    meaning: "GitHub의 최신 변경 기록을 현재 로컬 저장소로 가져와 합칩니다.",
    when: "다른 컴퓨터나 사람이 올린 변경을 내 작업 폴더에 반영할 때",
    example: "작업을 시작하기 전에 최신 상태를 받을 때",
    caution: "내 수정과 충돌하면 conflict를 해결해야 할 수 있어요.",
    next: ["git status", "git log --oneline"]
  },
  {
    id: "git-clone",
    command: "git clone 저장소주소",
    match: /^git\s+clone\s+\S+$/i,
    meaning: "GitHub repository를 기록과 파일까지 통째로 처음 내려받습니다.",
    when: "새 컴퓨터나 새 폴더에 기존 프로젝트를 처음 가져올 때",
    example: "git clone https://github.com/user/repo.git",
    caution: "이미 clone한 폴더에서는 보통 git pull을 사용해요.",
    next: ["cd 저장소이름", "git status"]
  },
  {
    id: "git-restore-all",
    command: "git restore .",
    match: /^git\s+restore\s+\.$/i,
    meaning: "아직 commit하지 않은 현재 폴더의 변경을 모두 되돌립니다.",
    when: "현재 변경 전체를 버리고 마지막 기록 상태로 돌아갈 때",
    example: "실험한 모든 수정을 취소할 때",
    caution: "되돌린 작업 내용은 복구하기 어려워요. 실행 전에 꼭 확인하세요.",
    next: ["git status"],
    warning: true
  },
  {
    id: "git-restore-file",
    command: "git restore 파일명",
    match: /^git\s+restore\s+(?!\.$)\S+$/i,
    meaning: "지정한 파일의 아직 commit하지 않은 변경을 되돌립니다.",
    when: "한 파일의 수정을 취소하고 마지막 기록 상태로 돌릴 때",
    example: "git restore README.md",
    caution: "해당 파일에서 작업한 내용이 사라집니다.",
    next: ["git status"],
    warning: true
  },
  {
    id: "git-reset",
    command: "git reset",
    match: /^git\s+reset$/i,
    meaning: "add로 준비한 변경을 준비 영역에서 내립니다. 파일 수정은 남습니다.",
    when: "실수로 add한 파일을 commit 대상에서 빼고 싶을 때",
    example: "git add . 후 일부를 다시 검토하고 싶을 때",
    caution: "옵션에 따라 동작과 위험도가 크게 달라집니다. 초보자는 기본 git reset만 연습하세요.",
    next: ["git status", "git add 파일명"],
    warning: true
  }
];

const scenarios = [
  {
    id: "new-folder",
    category: "CLI BASICS",
    title: "새 프로젝트 폴더 만들기",
    short: "폴더 만들기와 이동",
    goal: "터미널에서 새 폴더를 만들고 VS Code로 열어봅니다.",
    steps: [
      step("cd ~", /^cd\s+~$/i, "홈 폴더로 이동해 보세요.", "cd 다음에 물결표(~)를 입력해요.", "홈 폴더는 새 프로젝트를 시작할 위치를 찾기 좋은 출발점이에요.", "~"),
      step("mkdir commit-gym-practice", /^mkdir\s+\S+$/i, "새 프로젝트 폴더를 만들어 보세요.", "mkdir 뒤에는 원하는 폴더 이름을 적어요.", "mkdir은 새 폴더를 만듭니다. 폴더 이름은 예시와 달라도 괜찮아요.", ""),
      step("cd commit-gym-practice", /^cd\s+(?!~|\.\.)\S+$/i, "방금 만든 프로젝트 폴더로 이동해 보세요.", "cd 뒤에 폴더 이름을 적어요.", "명령어는 현재 폴더를 기준으로 실행됩니다. 프로젝트 안으로 들어왔어요.", ""),
      step("touch README.md", /^touch\s+\S+$/i, "프로젝트 안내 파일을 하나 만들어 보세요.", "touch 뒤에 README.md 같은 파일 이름을 적어요.", "README.md는 프로젝트를 소개하는 대표적인 문서예요.", ""),
      step("code .", /^code\s+\.$/i, "현재 폴더를 VS Code로 열어 보세요.", "code 뒤에 현재 폴더를 뜻하는 점(.)을 붙여요.", "code .은 지금 터미널이 보고 있는 폴더를 VS Code에서 엽니다.", "")
    ]
  },
  {
    id: "git-start",
    category: "GIT START",
    title: "Git 처음 시작하기",
    short: "init부터 첫 commit까지",
    goal: "아직 Git 저장소가 아닌 폴더에서 첫 commit을 만듭니다.",
    steps: [
      step("git status", /^git\s+status$/i, "먼저 현재 폴더가 Git 저장소인지 확인하세요.", "상태를 뜻하는 영어 단어는 status예요.", "처음에는 fatal: not a git repository가 나올 수 있어요. 아직 Git을 시작하지 않았다는 뜻입니다.", "fatal: not a git repository"),
      step("git init", /^git\s+init$/i, "현재 폴더에서 Git을 시작하세요.", "initialize의 줄임말인 init을 사용해요.", "숨김 폴더 .git이 생기고, 이제 이 폴더의 변경 기록을 관리할 수 있어요.", "Initialized empty Git repository"),
      step("git status", /^git\s+status$/i, "Git을 시작한 뒤 상태를 다시 확인하세요.", "방금 첫 단계에서 썼던 확인 명령어예요.", "이제 오류 대신 branch와 파일 상태가 보여요.", "On branch main\nNo commits yet"),
      step("git add .", /^git\s+add\s+\.$/i, "현재 변경 파일을 첫 commit 대상으로 준비하세요.", "현재 폴더 전체를 뜻하는 점(.)을 add 뒤에 붙여요.", "add는 저장 자체가 아니라 다음 commit에 담을 파일을 고르는 단계예요.", ""),
      step("git commit -m \"first commit\"", /^git\s+commit\s+-m\s+(['"]).+\1$/i, "첫 commit을 메시지와 함께 만드세요.", "git commit -m 뒤에 따옴표로 메시지를 적어요.", "commit 메시지는 예시와 달라도 괜찮아요. 로컬 저장소에 첫 기록이 생겼습니다.", "[main (root-commit)] first commit")
    ]
  },
  {
    id: "connect-github",
    category: "GITHUB",
    title: "GitHub repository 연결하기",
    short: "remote와 첫 push",
    goal: "로컬 폴더를 GitHub repository와 연결하고 처음 push합니다.",
    steps: [
      step("git remote -v", /^git\s+remote\s+-v$/i, "현재 연결된 remote가 있는지 확인하세요.", "remote 뒤에 -v 옵션을 붙여요.", "아무것도 나오지 않아도 정상이에요. 아직 GitHub 주소를 등록하지 않은 상태입니다.", "(아무 출력 없음)"),
      step("git remote add origin https://github.com/user/repo.git", /^git\s+remote\s+add\s+origin\s+\S+$/i, "GitHub repository 주소를 origin으로 등록하세요.", "git remote add origin 뒤에 저장소 주소를 붙여요.", "origin은 remote 주소에 붙이는 기본 별명입니다. URL은 예시와 달라도 괜찮아요.", ""),
      step("git branch -M main", /^git\s+branch\s+-m\s+main$/i, "현재 branch 이름을 main으로 맞추세요.", "branch 뒤에 대문자 -M과 main을 입력해요.", "GitHub의 기본 branch 이름과 로컬 branch 이름을 main으로 맞췄어요.", ""),
      step("git push -u origin main", /^git\s+push\s+-u\s+origin\s+main$/i, "main branch를 GitHub에 처음 push하세요.", "첫 push에는 -u origin main을 붙여요.", "첫 push에서 기본 연결을 만들었으므로 이후에는 git push만 입력하면 됩니다.", "branch 'main' set up to track 'origin/main'")
    ]
  },
  {
    id: "daily-routine",
    category: "DAILY ROUTINE",
    title: "평소 작업 루틴",
    short: "status부터 push까지",
    goal: "파일 수정 후 GitHub에 올리는 기본 루틴을 반복합니다.",
    steps: [
      step("git status", /^git\s+status$/i, "어떤 파일이 바뀌었는지 현재 상태를 확인하세요.", "Git에서는 무엇을 하기 전 status부터 확인하는 습관이 좋아요.", "status는 작업 폴더, 준비 영역, commit 상태를 한눈에 보여줍니다.", "Changes not staged for commit"),
      step("git diff", /^git\s+diff$/i, "수정한 내용을 구체적으로 확인하세요.", "difference의 줄임말인 diff를 사용해요.", "diff로 commit 전에 잘못 수정한 부분이 없는지 검토할 수 있어요.", "+ 새로 추가한 내용"),
      step("git add .", /^git\s+add\s+\.$/i, "변경 파일을 commit 대상으로 준비하세요.", "git add 뒤에 현재 폴더 전체를 뜻하는 점(.)을 붙여요.", "add는 변경 파일을 staging area에 올립니다.", ""),
      step("git commit -m \"update README\"", /^git\s+commit\s+-m\s+(['"]).+\1$/i, "변경을 설명하는 메시지로 commit을 만드세요.", "git commit -m 뒤에 따옴표로 자유로운 메시지를 적어요.", "commit은 현재 작업 상태를 사진처럼 로컬에 저장합니다.", "[main] update README"),
      step("git push", /^git\s+push$/i, "새 commit을 GitHub에 올리세요.", "처음 연결이 끝난 뒤에는 짧게 git push만 쓰면 돼요.", "push는 로컬 commit을 GitHub에 업로드합니다.", "main -> main")
    ]
  },
  {
    id: "clone-repo",
    category: "DOWNLOAD",
    title: "GitHub에서 내려받기",
    short: "clone으로 처음 받기",
    goal: "새 폴더나 다른 컴퓨터에서 기존 repository를 가져옵니다.",
    steps: [
      step("cd ~", /^cd\s+~$/i, "repository를 받을 출발 위치로 이동하세요.", "홈 폴더는 cd ~로 이동해요.", "clone은 현재 위치 아래에 새 프로젝트 폴더를 만듭니다.", "~"),
      step("git clone https://github.com/user/repo.git", /^git\s+clone\s+\S+$/i, "GitHub repository를 통째로 내려받으세요.", "git clone 뒤에 저장소 주소를 붙여요.", "clone은 파일과 Git 기록을 처음 한 번 통째로 내려받는 명령어예요.", "Cloning into 'repo'..."),
      step("cd repo", /^cd\s+(?!~|\.\.)\S+$/i, "clone으로 생긴 repository 폴더로 이동하세요.", "cd 뒤에 저장소 이름을 적어요.", "Git 명령어를 쓰려면 .git이 있는 프로젝트 폴더 안으로 이동해야 해요.", ""),
      step("git status", /^git\s+status$/i, "내려받은 저장소 상태를 확인하세요.", "현재 상태 확인은 언제나 git status예요.", "clone한 직후라면 보통 변경 없이 깨끗한 상태입니다.", "nothing to commit, working tree clean")
    ]
  },
  {
    id: "moved-folder",
    category: "CHECKUP",
    title: "폴더를 옮긴 뒤 확인하기",
    short: ".git과 현재 위치 확인",
    goal: "프로젝트 폴더를 옮긴 뒤 Git 기록과 연결이 유지됐는지 확인합니다.",
    steps: [
      step("cd moved-project", /^cd\s+(?!~|\.\.)\S+$/i, "옮긴 프로젝트 폴더로 이동하세요.", "cd 뒤에 옮긴 폴더의 경로 또는 이름을 적어요.", "가장 먼저 터미널의 현재 위치가 프로젝트 폴더인지 확인해야 해요.", ""),
      step("git status", /^git\s+status$/i, "이 위치에서 Git 저장소가 유지됐는지 확인하세요.", "Git 상태 확인 명령어를 사용해요.", ".git 폴더가 같이 옮겨졌다면 정상 동작합니다. 오류가 나면 현재 위치와 .git 유무를 확인하세요.", "On branch main"),
      step("git remote -v", /^git\s+remote\s+-v$/i, "기존 GitHub 연결 주소도 확인하세요.", "remote 주소를 자세히 보는 -v 옵션을 사용해요.", ".git 폴더 안에는 remote 설정도 저장되므로 폴더 전체를 옮겼다면 연결이 유지됩니다.", "origin  https://github.com/user/repo.git (fetch)\norigin  https://github.com/user/repo.git (push)")
    ]
  },
  {
    id: "missing-remote",
    category: "TROUBLESHOOT",
    title: "remote가 없을 때",
    short: "빈 remote 복구하기",
    goal: "git remote -v가 비어 있는 상황을 이해하고 GitHub 연결을 만듭니다.",
    steps: [
      step("git remote -v", /^git\s+remote\s+-v$/i, "remote 연결 상태를 확인하세요.", "remote 뒤에 -v를 붙여요.", "아무것도 나오지 않으면 Git은 시작됐지만 GitHub와는 아직 연결되지 않은 상태예요.", "(아무 출력 없음)"),
      step("git remote add origin https://github.com/user/repo.git", /^git\s+remote\s+add\s+origin\s+\S+$/i, "GitHub repository 주소를 origin으로 추가하세요.", "git remote add origin 뒤에 URL을 붙여요.", "remote는 로컬 저장소와 GitHub repository를 연결하는 주소입니다.", ""),
      step("git remote -v", /^git\s+remote\s+-v$/i, "주소가 잘 등록됐는지 다시 확인하세요.", "첫 단계와 같은 명령어로 확인해요.", "fetch와 push 주소가 나타나면 연결이 등록된 것입니다.", "origin  https://github.com/user/repo.git (fetch)\norigin  https://github.com/user/repo.git (push)"),
      step("git push -u origin main", /^git\s+push\s+-u\s+origin\s+main$/i, "처음 push하며 기본 연결을 설정하세요.", "처음에는 -u origin main을 함께 적어요.", "이제 다음 commit부터는 git push만 입력해도 됩니다.", "branch 'main' set up to track 'origin/main'")
    ]
  },
  {
    id: "desktop-vs-cli",
    category: "COMPARE",
    title: "GitHub Desktop과 CLI",
    short: "버튼과 명령어 연결",
    goal: "GitHub Desktop의 버튼이 어떤 Git 명령어와 같은지 연결해 봅니다.",
    steps: [
      step("git status", /^git\s+status$/i, "Desktop이 보여주는 Changes 목록을 CLI로 확인하세요.", "현재 상태를 확인하는 명령어예요.", "GitHub Desktop의 Changes 목록은 CLI에서 git status로 확인하는 정보와 비슷해요.", "Changes not staged for commit"),
      step("git add .", /^git\s+add\s+\.$/i, "Desktop에서 변경 파일을 체크하는 작업을 CLI로 해보세요.", "변경 전체를 준비하려면 add와 점(.)을 써요.", "Desktop의 파일 체크박스는 어떤 변경을 commit에 담을지 고르는 add 단계와 비슷합니다.", ""),
      step("git commit -m \"practice desktop flow\"", /^git\s+commit\s+-m\s+(['"]).+\1$/i, "Desktop의 Commit 버튼에 해당하는 명령어를 입력하세요.", "commit -m 뒤에 자유로운 메시지를 적어요.", "Desktop의 Commit 버튼과 CLI의 git commit은 같은 Git 작업을 수행합니다.", "[main] practice desktop flow"),
      step("git push", /^git\s+push$/i, "Desktop의 Push origin 버튼에 해당하는 명령어를 입력하세요.", "두 단어로 된 짧은 업로드 명령어예요.", "CLI는 직접 입력하고 Desktop은 버튼을 누르지만 같은 Git 작업입니다. Desktop에서 Publish repository를 사용하면 remote 등록과 첫 push 일부를 자동으로 처리해 줍니다.", "main -> main")
    ]
  }
];

function step(example, pattern, prompt, hint, explanation, output) {
  return { example, pattern, prompt, hint, explanation, output };
}

const menuItems = [
  { icon: "$_", title: "CLI 기본 훈련", description: "폴더를 만들고 이동하며 터미널과 친해져요.", scenario: 0 },
  { icon: "↻", title: "Git 기본 루틴 훈련", description: "status부터 push까지 반복해서 입력해요.", scenario: 3 },
  { icon: "+", title: "처음 repository 등록하기", description: "git init과 첫 commit의 흐름을 익혀요.", scenario: 1 },
  { icon: "⇄", title: "GitHub remote 연결하기", description: "로컬 프로젝트를 GitHub와 연결해요.", scenario: 2 },
  { icon: "⌂", title: "폴더를 옮긴 뒤 확인하기", description: ".git과 현재 위치를 차근차근 확인해요.", scenario: 5 },
  { icon: "!", title: "자주 겪는 실수 해결하기", description: "당황스러운 오류의 뜻과 해결법을 배워요.", target: "concepts", noteView: "errors" },
  { icon: "⌘", title: "명령어 매뉴얼 검색", description: "여러 줄도 한 번에 쉬운 말로 풀어봐요.", target: "manual" },
  { icon: "?", title: "미니 퀴즈", description: "다섯 문제로 오늘 배운 내용을 확인해요.", target: "quiz" }
];

const concepts = [
  ["CLI란?", "$_", "버튼 대신 글자로 명령을 입력해 컴퓨터와 대화하는 방식이에요. 터미널이 대화창입니다."],
  ["현재 폴더란?", "pwd", "터미널이 지금 바라보는 작업 공간이에요. 모든 상대 경로와 명령어는 여기서 시작합니다."],
  ["repository란?", "repo", "프로젝트 파일과 변경 기록을 함께 보관하는 공간이에요. 줄여서 repo라고도 불러요."],
  ["local과 remote", "L/R", "local은 내 컴퓨터의 저장소, remote는 GitHub처럼 인터넷에 있는 연결된 저장소예요."],
  ["Git과 GitHub", "Git", "Git은 내 컴퓨터의 기록 관리 도구, GitHub는 그 기록을 인터넷에 올려두는 서비스예요."],
  ["commit이란?", "●", "현재 작업 상태를 설명과 함께 사진처럼 저장하는 것이에요. local에 먼저 생깁니다."],
  ["push란?", "↑", "내 컴퓨터에 쌓인 commit을 GitHub로 올리는 작업이에요."],
  ["pull이란?", "↓", "GitHub의 최신 변경 기록을 내 컴퓨터로 가져와 현재 작업과 합치는 작업이에요."],
  ["clone이란?", "⇣", "GitHub repository를 파일과 기록까지 처음 한 번 통째로 내려받는 것이에요."],
  ["remote란?", "⇄", "local repository가 연결할 인터넷 저장소의 주소예요. 여러 개를 등록할 수도 있어요."],
  ["origin이란?", "o", "remote 주소에 붙이는 기본 별명이에요. 주소 대신 origin이라고 짧게 부를 수 있어요."],
  ["main branch란?", "⑂", "프로젝트의 기본 작업 흐름 이름이에요. 나무의 중심 줄기처럼 생각하면 쉬워요."],
  [".git 폴더란?", ".g", "Git 기록과 설정이 담긴 숨김 폴더예요. 이 폴더가 있어야 Git 저장소로 인식됩니다."],
  ["GitHub Desktop이란?", "GUI", "Git 작업을 버튼으로 하는 앱이에요. repository 생성이나 Publish를 하면 remote 연결과 첫 push 일부를 자동 처리하기도 해요."],
  ["GitHub Pages란?", "web", "GitHub repository의 정적 HTML/CSS/JS를 웹사이트로 공개해 주는 기능이에요."]
];

const errors = [
  {
    title: "fatal: not a git repository",
    icon: "!",
    summary: "현재 위치가 Git 저장소가 아니라는 뜻이에요.",
    detail: "원인: 프로젝트 폴더 밖에 있거나 .git 폴더가 없습니다. 해결: pwd와 ls로 위치를 확인하고 올바른 폴더로 이동하세요. 새 프로젝트라면 git init을 실행합니다."
  },
  {
    title: "git remote -v가 비어 있음",
    icon: "∅",
    summary: "GitHub 연결 주소가 아직 등록되지 않은 상태예요.",
    detail: "git init만으로는 GitHub와 연결되지 않습니다. git remote add origin 저장소주소로 연결한 뒤 다시 git remote -v를 확인하세요."
  },
  {
    title: "nothing to commit, working tree clean",
    icon: "✓",
    summary: "저장할 새 변경이 없다는 뜻이며, 보통 좋은 상태예요.",
    detail: "모든 변경이 이미 commit되었거나 파일을 수정하지 않은 상태입니다. 오류가 아니므로 안심해도 됩니다."
  },
  {
    title: "Push origin 버튼이 안 보임",
    icon: "↑",
    summary: "remote 연결이 없거나 아직 commit할 내용이 없을 수 있어요.",
    detail: "GitHub Desktop에서 repository가 올바르게 선택됐는지 확인하고, CLI에서는 git remote -v로 연결 주소를 확인하세요."
  },
  {
    title: "repository가 private로 생성됨",
    icon: "◼",
    summary: "private는 허용된 사람만, public은 누구나 볼 수 있어요.",
    detail: "GitHub Pages 공개 범위와 사용 가능 조건은 계정/플랜 설정에 따라 확인이 필요합니다. 공개 학습 프로젝트라면 public 설정이 단순해요."
  },
  {
    title: "main과 master의 차이",
    icon: "⑂",
    summary: "둘 다 기본 branch 이름으로 쓰였고, 요즘은 main을 주로 사용해요.",
    detail: "git branch -M main은 현재 branch 이름을 main으로 바꾸는 명령어입니다. GitHub의 기본 branch와 이름을 맞출 때 사용해요."
  },
  {
    title: "폴더를 옮겼더니 Git이 안 됨",
    icon: "⌂",
    summary: ".git 폴더가 빠졌거나 현재 위치가 잘못됐을 수 있어요.",
    detail: "프로젝트를 옮길 때 숨김 폴더인 .git도 함께 옮겨야 기록이 유지됩니다. 먼저 pwd, ls, git status로 현재 위치를 확인하세요."
  }
];

const quizQuestions = [
  {
    question: "GitHub에 내 commit을 올릴 때 사용하는 명령어는?",
    options: ["git pull", "git push", "git clone", "git status"],
    answer: 1,
    explanation: "git push는 로컬에 만든 commit을 연결된 remote repository로 올립니다."
  },
  {
    question: "현재 Git 상태를 가장 먼저 확인하고 싶을 때 사용하는 명령어는?",
    options: ["git status", "git init", "git add .", "git log"],
    answer: 0,
    explanation: "git status는 변경 파일, add 상태, branch 등 현재 상황을 보여줍니다."
  },
  {
    question: "현재 폴더에서 Git 기록 관리를 처음 시작하는 명령어는?",
    options: ["git clone", "git commit", "git init", "git remote -v"],
    answer: 2,
    explanation: "git init을 실행하면 현재 폴더에 .git 폴더가 생기고 Git 저장소가 됩니다."
  },
  {
    question: "연결된 GitHub repository 주소를 확인하는 명령어는?",
    options: ["git remote -v", "git diff", "pwd", "git branch -M main"],
    answer: 0,
    explanation: "git remote -v는 fetch와 push에 사용할 remote 주소를 보여줍니다."
  },
  {
    question: "GitHub repository를 새 컴퓨터에 처음 통째로 내려받는 명령어는?",
    options: ["git pull", "git restore .", "git clone 저장소주소", "git add ."],
    answer: 2,
    explanation: "처음 한 번은 git clone을 사용하고, 이미 받은 저장소의 최신 변경은 git pull로 가져옵니다."
  }
];

const state = {
  scenarioIndex: 0,
  stepIndex: 0,
  history: [],
  completed: loadCompleted(),
  noteView: "concepts",
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  renderMenu();
  renderScenarioButtons();
  renderScenario();
  renderQuickCommands();
  renderNotes();
  renderQuiz();
  updateOverallProgress();
});

function cacheElements() {
  [
    "menuGrid", "scenarioButtons", "scenarioCount", "scenarioEyebrow", "scenarioTitle", "scenarioGoal",
    "stepBadge", "lessonProgressBar", "terminalHistory", "commandForm", "commandInput", "guideNumber",
    "stepPrompt", "hintButton", "restartButton", "feedbackPanel", "heroProgressText", "heroProgressBar",
    "resetProgressButton", "manualInput", "manualSearchButton", "manualExampleButton", "quickCommands",
    "manualResults", "noteTabs", "notesGrid", "quizScore", "quizTotal", "quizNumber", "quizDots",
    "quizQuestion", "quizOptions", "quizFeedback", "quizNextButton", "quizRestartButton"
  ].forEach((id) => { els[id] = document.getElementById(id); });
}

function bindEvents() {
  els.commandForm.addEventListener("submit", handleCommand);
  els.hintButton.addEventListener("click", showHint);
  els.restartButton.addEventListener("click", restartScenario);
  els.resetProgressButton.addEventListener("click", resetProgress);
  els.manualSearchButton.addEventListener("click", renderManual);
  els.manualExampleButton.addEventListener("click", () => {
    els.manualInput.value = "git status\ngit add .\ngit commit -m \"update\"\ngit push";
    renderManual();
  });
  els.noteTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-note-view]");
    if (!button) return;
    state.noteView = button.dataset.noteView;
    renderNotes();
  });
  els.quizNextButton.addEventListener("click", nextQuiz);
  els.quizRestartButton.addEventListener("click", restartQuiz);
}

function renderMenu() {
  els.menuGrid.innerHTML = menuItems.map((item, index) => {
    const done = Number.isInteger(item.scenario) && state.completed.includes(scenarios[item.scenario].id);
    return `
      <button class="menu-card ${done ? "done" : ""}" type="button" data-menu-index="${index}">
        <span class="menu-card-number">0${index + 1}</span>
        <span class="menu-card-icon">${done ? "✓" : item.icon}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <span class="menu-card-arrow">→</span>
      </button>
    `;
  }).join("");

  els.menuGrid.querySelectorAll("[data-menu-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = menuItems[Number(button.dataset.menuIndex)];
      if (Number.isInteger(item.scenario)) {
        selectScenario(item.scenario);
        scrollToId("training");
        return;
      }
      if (item.noteView) {
        state.noteView = item.noteView;
        renderNotes();
      }
      scrollToId(item.target);
    });
  });
}

function renderScenarioButtons() {
  els.scenarioButtons.innerHTML = scenarios.map((scenario, index) => `
    <button class="scenario-button ${index === state.scenarioIndex ? "active" : ""} ${state.completed.includes(scenario.id) ? "done" : ""}" type="button" data-scenario="${index}">
      <span>${state.completed.includes(scenario.id) ? "✓" : String(index + 1).padStart(2, "0")}</span>
      <span><b>${scenario.short}</b><small>${scenario.category}</small></span>
    </button>
  `).join("");

  els.scenarioButtons.querySelectorAll("[data-scenario]").forEach((button) => {
    button.addEventListener("click", () => selectScenario(Number(button.dataset.scenario)));
  });
}

function selectScenario(index) {
  state.scenarioIndex = index;
  state.stepIndex = 0;
  state.history = [];
  renderScenarioButtons();
  renderScenario();
}

function renderScenario() {
  const scenario = scenarios[state.scenarioIndex];
  const currentStep = scenario.steps[state.stepIndex];
  const complete = state.stepIndex >= scenario.steps.length;
  const displayStep = Math.min(state.stepIndex + 1, scenario.steps.length);

  els.scenarioCount.textContent = `${String(state.scenarioIndex + 1).padStart(2, "0")} / ${String(scenarios.length).padStart(2, "0")}`;
  els.scenarioEyebrow.textContent = `SCENARIO ${String(state.scenarioIndex + 1).padStart(2, "0")} · ${scenario.category}`;
  els.scenarioTitle.textContent = scenario.title;
  els.scenarioGoal.textContent = scenario.goal;
  els.stepBadge.textContent = complete ? "완료" : `${displayStep} / ${scenario.steps.length}`;
  els.lessonProgressBar.style.width = `${(state.stepIndex / scenario.steps.length) * 100}%`;
  els.guideNumber.textContent = String(displayStep).padStart(2, "0");
  els.stepPrompt.textContent = complete ? "훈련 완료! 다른 코스를 선택하거나 다시 연습해 보세요." : currentStep.prompt;
  els.commandInput.disabled = complete;
  els.commandInput.placeholder = complete ? "훈련을 완료했습니다" : "명령어를 입력하세요";
  renderHistory();

  if (complete) {
    setFeedback("success", "✓", "훈련 완료! 흐름을 끝까지 연결했습니다.", "같은 시나리오를 한 번 더 반복하면 명령어가 더 자연스러워져요.");
  } else if (state.history.length === 0) {
    setFeedback("info", "i", "첫 명령어를 입력해 보세요.", "틀려도 괜찮아요. 바로 이해할 수 있는 힌트를 드릴게요.");
  }
}

function handleCommand(event) {
  event.preventDefault();
  const input = els.commandInput.value.trim();
  if (!input) {
    setFeedback("warning", "!", "명령어가 비어 있어요.", "지금 할 일을 읽고 한 줄을 입력해 보세요.");
    return;
  }

  const scenario = scenarios[state.scenarioIndex];
  const currentStep = scenario.steps[state.stepIndex];
  const normalized = normalize(input);
  const correct = currentStep.pattern.test(normalized);

  state.history.push({
    input,
    correct,
    output: correct ? currentStep.output : "",
    note: correct ? currentStep.explanation : ""
  });
  els.commandInput.value = "";

  if (correct) {
    state.stepIndex += 1;
    if (state.stepIndex >= scenario.steps.length) {
      completeScenario(scenario.id);
    } else {
      setFeedback("success", "✓", "좋아요, 다음 단계로 이동합니다.", currentStep.explanation);
    }
    renderScenario();
  } else {
    const close = normalized.split(" ")[0] === normalize(currentStep.example).split(" ")[0];
    setFeedback(
      "warning",
      "!",
      close ? "거의 맞았어요. 형식을 조금만 확인해 보세요." : "지금 단계와 다른 명령어예요.",
      `${currentStep.hint} 예시: ${currentStep.example}`
    );
    renderHistory();
    els.commandInput.focus();
  }
}

function showHint() {
  const scenario = scenarios[state.scenarioIndex];
  const currentStep = scenario.steps[state.stepIndex];
  if (!currentStep) {
    setFeedback("success", "✓", "이미 이 훈련을 완료했어요.", "다시 연습 버튼을 누르면 처음부터 반복할 수 있습니다.");
    return;
  }
  setFeedback("warning", "?", currentStep.hint, `입력 예시: ${currentStep.example}`);
  els.commandInput.focus();
}

function restartScenario() {
  state.stepIndex = 0;
  state.history = [];
  renderScenario();
}

function renderHistory() {
  if (state.history.length === 0) {
    els.terminalHistory.innerHTML = `<p class="history-output"># 여기는 실제 명령을 실행하지 않는 안전한 연습 공간입니다.</p><p class="history-output"># 아래 입력창에 명령어를 한 줄씩 입력하세요.</p>`;
    return;
  }

  els.terminalHistory.innerHTML = state.history.map((entry) => `
    <p><span class="prompt">➜</span> <span class="path">practice</span> ${escapeHtml(entry.input)}</p>
    ${entry.correct
      ? `<p class="history-success">✓ 올바른 명령어입니다.</p>
         ${entry.output ? `<p class="history-output">${escapeHtml(entry.output)}</p>` : ""}
         <p class="history-note">${escapeHtml(entry.note)}</p>`
      : `<p class="history-error">✗ 현재 단계의 명령어와 달라요. 힌트를 확인해 보세요.</p>`}
  `).join("");
  els.terminalHistory.scrollTop = els.terminalHistory.scrollHeight;
}

function setFeedback(type, icon, title, message) {
  els.feedbackPanel.className = `feedback-panel ${type}`;
  els.feedbackPanel.innerHTML = `
    <span class="feedback-icon">${icon}</span>
    <div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(message)}</p></div>
  `;
}

function completeScenario(id) {
  if (!state.completed.includes(id)) {
    state.completed.push(id);
    saveCompleted();
  }
  renderMenu();
  renderScenarioButtons();
  updateOverallProgress();
}

function updateOverallProgress() {
  const percent = Math.round((state.completed.length / scenarios.length) * 100);
  els.heroProgressText.textContent = `${percent}%`;
  els.heroProgressBar.style.width = `${percent}%`;
}

function resetProgress() {
  if (!window.confirm("완료한 훈련 기록을 모두 초기화할까요?")) return;
  state.completed = [];
  saveCompleted();
  renderMenu();
  renderScenarioButtons();
  updateOverallProgress();
}

function renderQuickCommands() {
  const quick = ["git status", "git add .", "git commit -m \"update\"", "git push", "git remote -v", "git clone URL"];
  els.quickCommands.innerHTML = quick.map((command) => `<button class="quick-command" type="button">${escapeHtml(command)}</button>`).join("");
  els.quickCommands.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      els.manualInput.value = button.textContent;
      renderManual();
    });
  });
}

function renderManual() {
  const lines = els.manualInput.value.split("\n").map((line) => line.trim()).filter(Boolean);
  if (lines.length === 0) {
    els.manualResults.innerHTML = `
      <div class="empty-state">
        <span>⌘</span><h3>명령어를 한 줄 이상<br>입력해 주세요.</h3><p>예: <code>git status</code></p>
      </div>`;
    return;
  }

  const found = lines.map((line) => ({ line, data: findCommand(line) }));
  const summary = summarizeFlow(found);
  els.manualResults.innerHTML = `
    ${lines.length > 1 ? `<div class="manual-summary"><small>전체 흐름 요약</small><p>${escapeHtml(summary)}</p></div>` : ""}
    ${found.map(renderCommandResult).join("")}
  `;
}

function findCommand(input) {
  const normalized = normalize(input);
  return commandManual.find((item) => item.match.test(normalized));
}

function renderCommandResult(result, index) {
  if (!result.data) {
    return `
      <article class="command-result unknown-command">
        <small>LINE ${String(index + 1).padStart(2, "0")} · 찾지 못한 명령어</small>
        <h3>${escapeHtml(result.line)}</h3>
        <div class="result-line"><b>확인하기</b><p>철자와 공백을 확인해 보세요. 이 앱의 매뉴얼에 아직 없는 명령어일 수도 있어요.</p></div>
      </article>
    `;
  }
  const item = result.data;
  return `
    <article class="command-result">
      <small>LINE ${String(index + 1).padStart(2, "0")} ${item.warning ? "· 주의 필요" : ""}</small>
      <h3>${escapeHtml(result.line)}</h3>
      <div class="result-line"><b>의미</b><p>${escapeHtml(item.meaning)}</p></div>
      <div class="result-line"><b>언제 사용</b><p>${escapeHtml(item.when)}</p></div>
      <div class="result-line"><b>예시 상황</b><p>${escapeHtml(item.example)}</p></div>
      <div class="result-line ${item.warning ? "warning" : ""}"><b>주의할 점</b><p>${escapeHtml(item.caution)}</p></div>
      <div class="result-line"><b>다음 후보</b><div class="next-chips">${item.next.map((next) => `<code>${escapeHtml(next)}</code>`).join("")}</div></div>
    </article>
  `;
}

function summarizeFlow(found) {
  const ids = found.filter((item) => item.data).map((item) => item.data.id);
  if (["git-status", "git-add-all", "git-commit", "git-push"].every((id) => ids.includes(id))) {
    return "현재 상태를 확인하고, 변경 파일을 commit 대상으로 올린 뒤, commit을 만들고, GitHub에 업로드하는 기본 작업 루틴입니다.";
  }
  if (ids.includes("git-remote-add") && ids.some((id) => id === "git-push-first" || id === "git-push")) {
    return "로컬 Git 저장소에 GitHub 주소를 연결하고 작업 기록을 처음 업로드하는 흐름입니다.";
  }
  if (ids.includes("git-clone")) {
    return "GitHub의 기존 repository를 새 작업 공간에 처음 내려받고 상태를 확인하는 흐름입니다.";
  }
  if (ids.includes("mkdir") && ids.includes("cd")) {
    return "새 폴더를 만들고 그 안으로 이동해 작업 공간을 준비하는 CLI 흐름입니다.";
  }
  return "입력한 명령어를 위에서 아래 순서대로 실행하며 작업 위치, Git 상태, 기록 또는 GitHub 연결을 다루는 흐름입니다.";
}

function renderNotes() {
  els.noteTabs.querySelectorAll("[data-note-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.noteView === state.noteView);
  });

  if (state.noteView === "concepts") {
    els.notesGrid.innerHTML = concepts.map((item) => `
      <article class="note-card">
        <span class="note-card-icon">${item[1]}</span>
        <h3>${item[0]}</h3>
        <p>${item[2]}</p>
      </article>
    `).join("");
    return;
  }

  els.notesGrid.innerHTML = errors.map((item) => `
    <article class="note-card error">
      <span class="note-card-icon">${item.icon}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <details>
        <summary>원인과 해결 방법</summary>
        <p>${escapeHtml(item.detail)}</p>
      </details>
    </article>
  `).join("");
}

function renderQuiz() {
  const quiz = quizQuestions[state.quizIndex];
  els.quizScore.textContent = state.quizScore;
  els.quizTotal.textContent = quizQuestions.length;
  els.quizNumber.textContent = `QUESTION ${String(state.quizIndex + 1).padStart(2, "0")}`;
  els.quizQuestion.textContent = quiz.question;
  els.quizFeedback.innerHTML = "";
  els.quizNextButton.disabled = true;
  els.quizNextButton.innerHTML = state.quizIndex === quizQuestions.length - 1 ? `결과 보기 <span>→</span>` : `다음 문제 <span>→</span>`;
  state.quizAnswered = false;

  els.quizDots.innerHTML = quizQuestions.map((_, index) => `<span class="${index < state.quizIndex ? "done" : index === state.quizIndex ? "active" : ""}"></span>`).join("");
  els.quizOptions.innerHTML = quiz.options.map((option, index) => `
    <button class="quiz-option" type="button" data-option="${index}">
      <span>${String.fromCharCode(65 + index)}</span><code>${escapeHtml(option)}</code>
    </button>
  `).join("");

  els.quizOptions.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => answerQuiz(Number(button.dataset.option)));
  });
}

function answerQuiz(selected) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;
  const quiz = quizQuestions[state.quizIndex];
  const correct = selected === quiz.answer;
  if (correct) state.quizScore += 1;
  els.quizScore.textContent = state.quizScore;
  els.quizNextButton.disabled = false;

  els.quizOptions.querySelectorAll("[data-option]").forEach((button) => {
    button.disabled = true;
    const index = Number(button.dataset.option);
    if (index === quiz.answer) button.classList.add("correct");
    if (index === selected && !correct) button.classList.add("wrong");
  });

  els.quizFeedback.innerHTML = `
    <strong class="${correct ? "" : "wrong-text"}">${correct ? "정답이에요!" : "조금 헷갈렸군요."}</strong>
    ${escapeHtml(quiz.explanation)}
  `;
}

function nextQuiz() {
  if (!state.quizAnswered) return;
  if (state.quizIndex < quizQuestions.length - 1) {
    state.quizIndex += 1;
    renderQuiz();
    return;
  }
  const message = state.quizScore === quizQuestions.length
    ? "완벽해요. 기본 흐름을 정확히 이해하고 있습니다."
    : `${quizQuestions.length}문제 중 ${state.quizScore}문제를 맞혔어요. 틀린 문제도 설명을 읽었으니 이미 한 걸음 전진했습니다.`;
  els.quizQuestion.textContent = "오늘의 퀴즈를 완료했습니다.";
  els.quizOptions.innerHTML = "";
  els.quizFeedback.innerHTML = `<strong>수고했어요!</strong>${escapeHtml(message)}`;
  els.quizNextButton.disabled = true;
}

function restartQuiz() {
  state.quizIndex = 0;
  state.quizScore = 0;
  renderQuiz();
}

function normalize(value) {
  return value.trim().replace(/\s+/g, " ");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function loadCompleted() {
  try {
    return JSON.parse(localStorage.getItem("commit-gym-completed")) || [];
  } catch {
    return [];
  }
}

function saveCompleted() {
  try {
    localStorage.setItem("commit-gym-completed", JSON.stringify(state.completed));
  } catch {
    // The app still works when browser storage is unavailable.
  }
}
