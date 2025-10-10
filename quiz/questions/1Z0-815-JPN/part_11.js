const Q_1Z0_815_JPN_11 = {
    prefix: "1Z0-815-JPN",
    part: "11",
    questions: [
        {
            id: 1,
            category: "モジュールシステム",
            difficulty: "初級",
            question: "次の説明のうち、正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "モジュールの設定は、module-info.javaに記述する",
                "モジュールの設定では、どのパッケージを公開するかを記述する",
                "モジュールの設定では、どのパッケージを利用するかを記述する",
                "module-info.javaがなくてもモジュール化することができる",
            ],
            answerIndex: [0, 1],
            explanation:
                "module-info.java はモジュール宣言のために必須であり、公開するパッケージを `exports` で指定する。",
        },
        {
            id: 2,
            category: "モジュールシステム",
            difficulty: "初級",
            question:
                "libディレクトリにあるsampleモジュールを実行したい。エントリーポイントを持つクラスがcom.test.Helloとしたときのコマンドとして正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "<code>java -m lib sample/com.test.Hello</code>",
                "<code>java --module-path lib com.test.Hello</code>",
                "<code>java --module-path lib -m com.test.Hello</code>",
                "<code>java --module-path lib -m sample/com.test.Hello</code>",
                "<code>java --module-path lib -m sample.com.test.Hello</code>",
            ],
            answerIndex: 3,
            explanation:
                "モジュール実行時には `--module-path` でモジュールパスを指定し、`-m <モジュール名>/<クラス名>` の形式でエントリーポイントを指定する。",
        },
        {
            id: 3,
            category: "モジュールシステム",
            difficulty: "中級",
            question:
                "sampleモジュールは、com.sampleパッケージを公開し、testモジュールを利用している。module-info.javaの設定として、正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "<code>module sample {\n    exports test;\n    requires com.sample;\n}</code>",
                "<code>module sample {\n    export com.sample;\n    requires test;\n}</code>",
                "<code>module sample {\n    requires com.sample;\n    requires test;\n}</code>",
                "<code>module sample {\n    exports com.sample;\n    requires test;\n}</code>",
            ],
            answerIndex: 3,
            explanation:
                "`exports com.sample;` により公開し、`requires test;` により依存するモジュールを指定する。",
        },
        {
            id: 4,
            category: "モジュールシステム",
            difficulty: "中級",
            question:
                "次の図のようなモジュールグラフがあったとき、module1でmodule3に属するパッケージのクラスを利用する際の説明として正しいものを選びなさい。（1つ選択）",
            code: "module1 → module2 → module3",
            choices: [
                "module1のmodule-info.javaで、module2をrequiresで宣言する",
                "module1のmodule-info.javaで、module2をrequires transitiveで宣言する",
                "module2のmodule-info.javaで、module3をrequiresで宣言する",
                "module2のmodule-info.javaで、module3をrequires transitiveで宣言する",
            ],
            answerIndex: 3,
            explanation:
                "`requires transitive` によって依存関係を伝播させることができるため、module2がmodule3を `requires transitive` で宣言する必要がある。",
        },
        {
            id: 5,
            category: "モジュールシステム",
            difficulty: "初級",
            question:
                "あらかじめ用意されているモジュールのうち、標準で組み込まれるモジュールとして、正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: ["java.lang", "java.base", "jdk.lang", "jdk.base"],
            answerIndex: 1,
            explanation:
                "Java 9以降、`java.base` モジュールはすべてのモジュールに自動的に読み込まれる。",
        },
        {
            id: 6,
            category: "モジュールシステム",
            difficulty: "中級",
            question:
                "module-info.javaに設定したモジュールの設定情報を調べるためのコマンドとして、正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "<code>java --describe-module</code>",
                "<code>jdeps --list-deps</code>",
                "<code>jmod describe</code>",
                "<code>java --show-module-resolution</code>",
            ],
            answerIndex: [0, 3],
            explanation:
                "モジュール情報を確認するには `java --describe-module` と `java --show-module-resolution` が使用される。`jdeps` は依存関係分析、`jmod` はモジュールパッケージの操作。",
        },
        {
            id: 7,
            category: "モジュールシステム",
            difficulty: "中級",
            question:
                "module-info.javaでexportsされていないパッケージを、一時的に利用してコンパイルしたい。javacコマンドのオプションとして正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "<code>--add-exports</code>",
                "<code>--exports</code>",
                "<code>--add</code>",
                "<code>--add-modules</code>",
            ],
            answerIndex: 0,
            explanation:
                "非公開パッケージを一時的に利用するためには `--add-exports` オプションを使用する。",
        },
    ],
};
