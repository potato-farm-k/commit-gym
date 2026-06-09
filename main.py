"""commit-gym: A beginner-friendly CLI for practicing Git commands."""

import random


# The five Git commands that beginners often use in a basic workflow.
# Keeping the data in one list makes it easier to move into lessons.py later.
GIT_COMMANDS = [
    {
        "command": "git status",
        "practice_prompt": "루틴 1 - 현재 상태 확인: ",
        "when": "작업 폴더의 현재 상태가 궁금할 때 사용합니다.",
        "description": "변경된 파일, staged 된 파일, 아직 Git이 추적하지 않는 파일을 보여 줍니다.",
    },
    {
        "command": "git diff",
        "practice_prompt": "루틴 2 - 변경 내용 확인: ",
        "when": "commit 하기 전에 어떤 내용이 바뀌었는지 확인할 때 사용합니다.",
        "description": "아직 staged 되지 않은 변경 내용을 자세히 보여 줍니다.",
    },
    {
        "command": "git add .",
        "practice_prompt": "루틴 3 - 변경 파일 준비: ",
        "when": "현재 폴더의 변경 내용을 commit 준비 단계에 올릴 때 사용합니다.",
        "description": "변경된 파일들을 staging area에 추가합니다.",
    },
    {
        "command": 'git commit -m "message"',
        "practice_prompt": "루틴 4 - 변경 내용 저장",
        "when": "준비된 변경 내용을 하나의 기록으로 저장할 때 사용합니다.",
        "description": "staged 된 변경 내용을 message와 함께 commit으로 만듭니다.",
    },
    {
        "command": "git push",
        "practice_prompt": "루틴 5 - 원격 저장소 업로드: ",
        "when": "내 컴퓨터의 commit을 GitHub 같은 원격 저장소에 올릴 때 사용합니다.",
        "description": "로컬 저장소의 commit을 원격 저장소로 업로드합니다.",
    },
]


# Quiz questions are separate from the command manual so quiz.py로 분리하기 쉽습니다.
QUIZ_QUESTIONS = [
    {
        "question": "현재 Git 상태를 확인하는 명령어는 무엇인가요?",
        "options": ["git status", "git diff", "git push"],
        "answer": "1",
    },
    {
        "question": "변경된 내용을 자세히 비교해서 보는 명령어는 무엇인가요?",
        "options": ["git add .", "git diff", "git commit -m \"message\""],
        "answer": "2",
    },
    {
        "question": "현재 폴더의 변경 파일들을 staging area에 올리는 명령어는 무엇인가요?",
        "options": ["git push", "git add .", "git status"],
        "answer": "2",
    },
    {
        "question": "staged 된 변경 내용을 message와 함께 저장하는 명령어는 무엇인가요?",
        "options": ["git commit -m \"message\"", "git diff", "git push"],
        "answer": "1",
    },
    {
        "question": "commit을 GitHub 같은 원격 저장소에 올리는 명령어는 무엇인가요?",
        "options": ["git status", "git add .", "git push"],
        "answer": "3",
    },
]


COMMIT_MESSAGE_EXAMPLES = [
    "fix typo",
    "add README",
    "update quiz",
    "style menu",
    "fix bug",
    "add manual",
]


EXIT_SHORTCUT = "q"


def print_line():
    """Print a simple divider to make the CLI easier to read."""
    print("-" * 50)


def show_menu():
    """Show the main menu."""
    print()
    print("commit-gym")
    print_line()
    print("1. Practice basic Git routine")
    print("2. Show Git command manual")
    print("3. Take a simple quiz")
    print("0. Exit")
    print()
    print(f"Tip: 언제든 {EXIT_SHORTCUT}를 입력하면 종료할 수 있습니다.")
    print()


def get_user_input(prompt):
    """Get user input and allow the user to quit from any prompt."""
    user_input = input(prompt).strip()

    if user_input.lower() == EXIT_SHORTCUT:
        show_exit_message()
        raise SystemExit

    return user_input


def show_exit_message():
    """Print the exit message with readable spacing."""
    print()
    print("commit-gym을 종료합니다. 즐거운 Git 연습 되세요!")
    print()


def is_commit_command(user_input):
    """Check the commit command shape without requiring one exact message."""
    prefix = 'git commit -m "'

    return (
        user_input.startswith(prefix)
        and user_input.endswith('"')
        and len(user_input) > len(prefix) + 1
    )


def is_correct_routine_command(user_input, git_command):
    """Check whether the user typed the right command for this routine."""
    if git_command["command"] == 'git commit -m "message"':
        return is_commit_command(user_input)

    return user_input == git_command["command"]


def make_practice_prompt(git_command):
    """Make the practice prompt for each Git routine."""
    if git_command["command"] == 'git commit -m "message"':
        example = random.choice(COMMIT_MESSAGE_EXAMPLES)
        return f'{git_command["practice_prompt"]} (예시 메시지: {example}): '

    return git_command["practice_prompt"]


def show_practiced_commands(practiced_commands):
    """Show the Git routine commands completed so far."""
    print()
    print("현재까지 입력한 루틴")

    for index, command in enumerate(practiced_commands, start=1):
        print(f"{index}. {command}")


def practice_basic_routine():
    """Ask the user to type the five basic Git commands in order."""
    print()
    print()
    print("Practice basic Git routine")
    print_line()
    print("아래 Git 명령어를 순서대로 입력해 보세요.")
    print("실제 Git 명령어는 실행되지 않습니다. 입력한 문자열만 확인합니다.")
    print(f"중간에 종료하려면 {EXIT_SHORTCUT}를 입력하세요.")
    print()

    practiced_commands = []

    for index, git_command in enumerate(GIT_COMMANDS, start=1):
        correct_command = git_command["command"]
        practice_prompt = make_practice_prompt(git_command)

        while True:
            user_input = get_user_input(practice_prompt)

            # 루틴 4는 commit message가 매번 달라질 수 있어서 형식만 확인합니다.
            if is_correct_routine_command(user_input, git_command):
                print("정답입니다")
                print(f"의미: {git_command['description']}")
                practiced_commands.append(user_input)
                show_practiced_commands(practiced_commands)
                break

            print("틀렸습니다")
            print(f"올바른 명령어: {correct_command}")
            print(f"의미: {git_command['description']}")
            print("다시 입력해 보세요.")
            print()

        print()


def show_git_command_manual():
    """Show a simple manual for the five Git commands."""
    print()
    print()
    print("Git command manual")
    print_line()

    for git_command in GIT_COMMANDS:
        print(f"명령어: {git_command['command']}")
        print(f"언제 사용하나요?: {git_command['when']}")
        print(f"간단한 설명: {git_command['description']}")
        print()


def take_simple_quiz():
    """Run a five-question multiple-choice quiz."""
    score = 0

    print()
    print()
    print("Take a simple quiz")
    print_line()
    print("보기 번호를 입력해 주세요. 예: 1")
    print(f"중간에 종료하려면 {EXIT_SHORTCUT}를 입력하세요.")
    print()

    for index, quiz in enumerate(QUIZ_QUESTIONS, start=1):
        print(f"Q{index}. {quiz['question']}")

        for option_index, option in enumerate(quiz["options"], start=1):
            print(f"  {option_index}. {option}")

        print()
        user_answer = get_user_input("정답: ")
        print()

        if user_answer == quiz["answer"]:
            print("정답입니다")
            score += 1
        else:
            correct_index = int(quiz["answer"]) - 1
            correct_option = quiz["options"][correct_index]
            print("틀렸습니다")
            print(f"정답: {quiz['answer']}. {correct_option}")

        print()

    print_line()
    print(f"최종 점수: {score} / {len(QUIZ_QUESTIONS)}")


def main():
    """Start the commit-gym CLI program."""
    while True:
        show_menu()
        choice = get_user_input("메뉴를 선택하세요: ")

        if choice == "1":
            practice_basic_routine()
        elif choice == "2":
            show_git_command_manual()
        elif choice == "3":
            take_simple_quiz()
        elif choice == "0":
            show_exit_message()
            break
        else:
            print()
            print("잘못된 메뉴입니다. 0, 1, 2, 3 중에서 선택해 주세요.")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        show_exit_message()
