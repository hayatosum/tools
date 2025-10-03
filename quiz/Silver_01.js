const SILVER_01 = {
  "prefix": "KS01",
  "questions": [
    {
      "id": 1,
      "category": "簡単なJavaプログラムの作成",
      "difficulty": "中級",
      "question": "パッケージに関する説明として、正しいものを選びなさい。（3つ選択）",
      "code": "",
      "choices": [
        "名前空間を提供する",
        "パッケージ名にはドメイン名を逆にしたものを使用しなければならない",
        "アクセス制御を提供する",
        "クラスの分類を可能にする",
        "パッケージに属さないクラスもある"
      ],
      "answerIndex": [0, 2, 3],
      "explanation": "パッケージは名前空間やアクセス制御、クラスの分類を提供する。パッケージに属さないクラス（デフォルトパッケージ）もあるが、ドメイン名逆順の命名は推奨慣習であり必須ではない。"
    },
    {
      "id": 2,
      "category": "簡単なJavaプログラムの作成",
      "difficulty": "中級",
      "question": "次のうち、パッケージ宣言が正しく記述されているコードを選びなさい。（1つ選択）",
      "code": "",
      "choices": ["<pre><code>import java.io.*;\n   package aaa;\n   public class Sample {}</pre></code>", "<pre><code>package aaa;\n   import java.io.*;\n   public class Sample {}</pre></code>", "<pre><code>import java.io.*;\n   package aaa {\n       public class Sample {}\n   }</pre></code>", "<pre><code>import java.io.*;\n   package aaa {\n       public class Sample {}\n   }</pre></code>"],
      "answerIndex": 1,
      "explanation": "package文はソースコードの先頭に1回だけ書く必要があるため、Bが正解。"
    },
    {
      "id": 3,
      "category": "簡単なJavaプログラムの作成",
      "difficulty": "中級",
      "question": "次のうち、インポート宣言をしなくても、自動的にインポートされるものはどれか。正しいものを選びなさい。（2つ選択）",
      "code": "",
      "choices": [
        "java.langパッケージに属するクラス",
        "java.langパッケージのうち、StringクラスとSystemクラスの2つだけ",
        "同じパッケージに属するクラス",
        "サブパッケージに属するクラス"
      ],
      "answerIndex": [0, 2],
      "explanation": "java.langパッケージ全体と、同じパッケージに属するクラスは自動的に利用可能。"
    },
    {
      "id": 4,
      "category": "簡単なJavaプログラムの作成",
      "difficulty": "上級",
      "question": "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
      "code": "public class Sample {\n    protected int num = 10;\n}\n\npackage ex4;\npublic class SampleImpl extends Sample {\n    public static void main(String[] args) {\n        System.out.println(num);\n    }\n}",
      "choices": [
        "0が表示される",
        "10が表示される",
        "コンパイルエラーが発生する",
        "実行時に例外がスローされる"
      ],
      "answerIndex": 2,
      "explanation": "protectedフィールドにはサブクラスからアクセスできるが、インスタンスを介さないと参照できないため、このコードはコンパイルエラーになる。"
    },
    {
      "id": 5,
      "category": "簡単なJavaプログラムの作成",
      "difficulty": "中級",
      "question": "アプリケーションのエントリーポイントとなるメソッドの条件として、正しいものを選びなさい。（3つ選択）",
      "code": "",
      "choices": [
        "publicであること",
        "staticであること",
        "1つのソースファイルに複数記述できる",
        "戻り値型intであること",
        "引数はString配列型もしくはString型の可変長引数であること",
        "戻り値としてvoid、もしくはintを戻すこと"
      ],
      "answerIndex": [0, 1, 4],
      "explanation": "Javaのmainメソッドは「public static void main(String[] args)」で定義される。public、static、引数がString配列（または可変長String引数）が必須。戻り値はvoidである。"
    },
    {
      "id": 6,
      "category": "簡単なJavaプログラムの作成",
      "difficulty": "初級",
      "question": "次のプログラムを以下に示したコマンドで実行したときの結果として、正しいものを選びなさい。（1つ選択）",
      "code": "> java Main java one two\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + ' ' + args[1]);\n    }\n}",
      "choices": [
        "「Main java」と表示される",
        "「java one」と表示される",
        "「one two」と表示される",
        "コンパイルエラーが発生する",
        "実行時に例外がスローされる"
      ],
      "answerIndex": 1,
      "explanation": "コマンド `java Main java one two` の場合、args[0]=\"java\", args[1]=\"one\" なので「java one」と表示される。"
    },
    {
      "id": 7,
      "category": "簡単なJavaプログラムの作成",
      "difficulty": "初級",
      "question": "次のうち、Javaのクラスを実行するコマンドとして、正しいものを選びなさい。（2つ選択）",
      "code": "",
      "choices": [
        "javac Test.java",
        "java Test",
        "java Test.java",
        "javac Test",
        "javap Test",
        "jmod Test.java"
      ],
      "answerIndex": [1, 2],
      "explanation": "クラス実行は `java クラス名`。ソースコードをコンパイルするのは `javac Test.java`。`javac Test` や `java Test.java` は誤り。"
    },
    {
      "id": 8,
      "category": "簡単なJavaプログラムの作成",
      "difficulty": "上級",
      "question": "以下に示したSampleクラスを実行したときの結果として、正しいものを選びなさい。なお、実行時のコマンドは次のとおりとする。（1つ選択）",
      "code": "> java Sample a ¥* a¥* \"a b c\"\n\npublic class Sample {\n    public static void main(String... args) {\n        System.out.println(args.length);\n    }\n}",
      "choices": [
        "4が表示される",
        "5が表示される",
        "6が表示される",
        "7が表示される"
      ],
      "answerIndex": 0,
      "explanation": "引数は `a`, `¥*`, `a¥*`, `a b c` の4つとして渡されるため、args.lengthは4となる。"
    }
  ]
};
