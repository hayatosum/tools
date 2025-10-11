const Q_1Z0_815_JPN_01 = {
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
                "Javaのパッケージは、クラス名の重複を防ぐための名前空間を提供します。アクセス制御もパッケージ単位で行うことができ、関連するクラスをまとめて分類する役割もあります。\n\nパッケージ名にドメイン名を逆にしたものを使うのは推奨される慣習ですが、必須ではありません。また、パッケージ宣言のないクラスはデフォルトパッケージに属します。\n\nこのため、名前空間を提供すること、アクセス制御を提供すること、クラスの分類を可能にすることが正しい内容です。",
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
                "<code>import java.io.*;\npackage aaa {\n    public class Sample {}\n};</code>",
            ],
            answerIndex: 1,
            explanation:
                "Javaのpackage宣言は、ソースファイルの一番先頭に1回だけ記述する必要があります。\n\nimport文はpackage宣言の後に書き、その後にクラス定義を記述します。\n\npackage宣言より前にimport文を書くことや、package宣言の後に波括弧で囲む書き方はJavaの文法として誤りです。\n\n正しい記述は、package宣言が先頭、その後にimport文、クラス定義の順で記述されたものです。",
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
                "インポート宣言をしなくても自動的に利用できるのは、java.langパッケージに属するクラスと、同じパッケージに属するクラスです。\n\njava.langパッケージにはStringやSystem、Mathなど多くの基本クラスが含まれており、明示的なimportなしで使うことができます。また、同じパッケージ内のクラス同士もimport不要で参照できます。\n\n一方、java.langパッケージの一部だけが自動でインポートされるわけではなく、サブパッケージのクラスは自動インポートされません。",
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
                "protected修飾子が付いたフィールドは、サブクラスからアクセスできますが、staticでないフィールドをstaticメソッド（mainメソッド）から直接参照することはできません。\n\nmainメソッドはstaticなので、インスタンスを生成せずにnumを参照しようとするとコンパイルエラーになります。\n\nしたがって、正しい答えはコンパイルエラーが発生するです。",
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
                "戻り値として0、もしくは1を戻すこと",
            ],
            answerIndex: [0, 1, 4],
            explanation:
                "Javaアプリケーションのエントリーポイントとなるmainメソッドは、publicであり、staticであり、引数としてString型の配列または可変長引数を受け取る必要があります。\n\n戻り値の型はvoidでなければならず、int型や戻り値で0や1を返す必要はありません。\n\nmainメソッドは1つのソースファイルに複数記述することもできますが、正しいmainメソッドの条件には含まれません。",
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
                'コマンドで指定した引数は、順番にargs配列に格納されます。\n\nこの場合、args[0]には"java"、args[1]には"one"が入ります。\n\nSystem.out.println(args[0] + \' \' + args[1]);の実行結果は「java one」となります。',
        },
        {
            id: 7,
            category: "簡単なJavaプログラムの作成",
            difficulty: "初級",
            question:
                "次のうち、Javaのクラスを実行するコマンドとして、正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "<code>javac Test.java</code>",
                "<code>java Test</code>",
                "<code>java Test.java</code>",
                "<code>javac Test</code>",
                "<code>javap Test</code>",
                "<code>jmod Test.java</code>",
            ],
            answerIndex: [1, 2],
            explanation:
                "Javaのクラスを実行する方法は次の通りです。\n\n・javacコマンドでコンパイルし、javaコマンドでクラス名を指定して実行\n　例：javac Test.java → java Test\n\n・Java SE 11以降では、javaコマンドだけでソースファイル（Test.java）を直接実行（ソースファイル単体実行）\n　例：java Test.java\n\nそのほかのコマンドについて：\n・javac Test　→　拡張子なしではコンパイルできません\n・javap Test　→　クラスの構造を調べるコマンドで、実行には使いません\n・jmod Test.java　→　モジュール操作用のコマンドで、クラスの実行には使いません",
        },
        {
            id: 8,
            category: "簡単なJavaプログラムの作成",
            difficulty: "上級",
            question:
                "以下に示したSampleクラスを実行したときの結果として、正しいものを選びなさい。なお、実行時のコマンドは次のとおりとする。（1つ選択）",
            code: '> java Sample a ¥" a¥" "a "b c\n\n 1. public class Sample {\n 2.     public static void main(String... args) {\n 3.         System.out.println(args.length);\n 4.     }\n 5. }',
            choices: ["4が表示される", "5が表示される", "6が表示される", "7が表示される"],
            answerIndex: 1,
            explanation:
                'このプログラムは、コマンドライン引数の数（args.length）を表示します。\n\nコマンド\n> java Sample a ¥" a¥" "a b" c\nを実行した場合、引数は次のように分割されます。\n\n・a\n・¥"\n・a¥"\n・a b（ダブルクォートで囲まれているため、スペースを含んで1つの引数になる）\n・c\n\nつまり、引数は合計で5つです。\n\nダブルクォートで囲まれた部分は、スペースが含まれていても1つの引数として扱われる点がポイントです。\n\nしたがって、args.lengthの値は5となり、実行結果は「5が表示される」となります。',
        },
    ],
};
