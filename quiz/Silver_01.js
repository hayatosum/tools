const JAVA_SILVER_1Z0_815_JPN_01 = {
    prefix: "1Z0-815-JPN",
    part: "01",
    questions: [
        {
            id: 1,
            category: "簡単なJavaプログラムの作成",
            difficulty: "中級",
            question: "パッケージに関する説明として、正しいものを選びなさい。（3つ選択）",
            code: "",
            choices: [
                "名前空間を提供する",
                "パッケージ名にはドメイン名を逆にしたものを使用しなければならない",
                "アクセス制御を提供する",
                "クラスの分類を可能にする",
                "パッケージに属さないクラスもある",
            ],
            answerIndex: [0, 2, 3],
            explanation:
                "パッケージは名前空間やアクセス制御、クラスの分類を提供する。パッケージに属さないクラス（デフォルトパッケージ）もあるが、ドメイン名逆順の命名は推奨慣習であり必須ではない。",
        },
        {
            id: 2,
            category: "簡単なJavaプログラムの作成",
            difficulty: "中級",
            question:
                "次のうち、パッケージ宣言が正しく記述されているコードを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "<code>import java.io.*;\npackage aaa;\npublic class Sample {}</code>",
                "<code>package aaa;\nimport java.io.*;\npublic class Sample {}</code>",
                "<code>import java.io.*;\npackage aaa {\n    public class Sample {}\n}</code>",
                "<code>import java.io.*;\npackage aaa {\n    public class Sample {}\n}</code>",
            ],
            answerIndex: 1,
            explanation: "package文はソースコードの先頭に1回だけ書く必要があるため、Bが正解。",
        },
        {
            id: 3,
            category: "簡単なJavaプログラムの作成",
            difficulty: "中級",
            question:
                "次のうち、インポート宣言をしなくても、自動的にインポートされるものはどれか。正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "java.langパッケージに属するクラス",
                "java.langパッケージのうち、StringクラスとSystemクラスの2つだけ",
                "同じパッケージに属するクラス",
                "サブパッケージに属するクラス",
            ],
            answerIndex: [0, 2],
            explanation:
                "java.langパッケージ全体と、同じパッケージに属するクラスは自動的に利用可能。",
        },
        {
            id: 4,
            category: "簡単なJavaプログラムの作成",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     protected int num = 10;\n 3. }\n\n 1. package ex4;\n 2. public class SampleImpl extends Sample {\n 3.     public static void main(String[] args) {\n 4.         System.out.println(num);\n 5.     }\n 6. }",
            choices: [
                "0が表示される",
                "10が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "protectedフィールドはサブクラスからアクセスできるが、staticでないフィールドをstaticなmainメソッドから直接参照することはできない。インスタンスを生成せずにnumを参照しようとするとコンパイルエラーになる。",
        },
        {
            id: 5,
            category: "簡単なJavaプログラムの作成",
            difficulty: "中級",
            question:
                "アプリケーションのエントリーポイントとなるメソッドの条件として、正しいものを選びなさい。（3つ選択）",
            code: "",
            choices: [
                "publicであること",
                "staticであること",
                "1つのソースファイルに複数記述できる",
                "戻り値型intであること",
                "引数はString配列型もしくはString型の可変長引数であること",
                "戻り値としてvoid、もしくはintを戻すこと",
            ],
            answerIndex: [0, 1, 4],
            explanation:
                "Javaのmainメソッドは「public static void main(String[] args)」で定義される。public、static、引数がString配列（または可変長String引数）が必須。戻り値はvoidである。",
        },
        {
            id: 6,
            category: "簡単なJavaプログラムの作成",
            difficulty: "初級",
            question:
                "次のプログラムを以下に示したコマンドで実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: "> java Main java one two\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         System.out.println(args[0] + ' ' + args[1]);\n 4.     }\n 5. }",
            choices: [
                "「Main java」と表示される",
                "「java one」と表示される",
                "「one two」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                'コマンド `java Main java one two` の場合、args[0]="java", args[1]="one" なので「java one」と表示される。',
        },
        {
            id: 7,
            category: "簡単なJavaプログラムの作成",
            difficulty: "初級",
            question:
                "次のうち、Javaのクラスを実行するコマンドとして、正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "javac Test.java",
                "java Test",
                "java Test.java",
                "javac Test",
                "javap Test",
                "jmod Test.java",
            ],
            answerIndex: [1, 2],
            explanation:
                "クラス実行は `java クラス名`。ソースコードをコンパイルするのは `javac Test.java`。`javac Test` や `java Test.java` は誤り。",
        },
        {
            id: 8,
            category: "簡単なJavaプログラムの作成",
            difficulty: "上級",
            question:
                "以下に示したSampleクラスを実行したときの結果として、正しいものを選びなさい。なお、実行時のコマンドは次のとおりとする。（1つ選択）",
            code: '> java Sample a ¥* a¥* "a b c"\n\n 1. public class Sample {\n 2.     public static void main(String... args) {\n 3.         System.out.println(args.length);\n 4.     }\n 5. }',
            choices: ["4が表示される", "5が表示される", "6が表示される", "7が表示される"],
            answerIndex: 0,
            explanation:
                "引数は `a`, `¥*`, `a¥*`, `a b c` の4つとして渡されるため、args.lengthは4となる。",
        },
    ],
};
