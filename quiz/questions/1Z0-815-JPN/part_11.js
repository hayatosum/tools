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
                "Javaのモジュールシステムでは、モジュールの設定をmodule-info.javaファイルに記述します。\n\nこのファイルには、そのモジュールがどのパッケージを外部に公開するか（exports）を明示的に記述します。\n\nモジュールの設定で利用するパッケージ（requires）は、他のモジュールへの依存関係を記述するものであり、パッケージ単位ではなくモジュール単位で指定します。\n\nmodule-info.javaが存在しない場合、そのコードはモジュールとして認識されません。\n\nしたがって、module-info.javaに記述し、公開するパッケージを指定することが正しい内容です。\n\nモジュールシステムの基本として、module-info.javaの役割とexportsの使い方を理解しておきましょう。",
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
                "Javaのモジュールを実行する際は、まず--module-pathオプションでモジュールが格納されているディレクトリ（ここではlib）を指定します。\n\n次に、-mオプションで実行したいモジュール名とエントリーポイントとなるクラス名を<モジュール名>/<クラス名>の形式で指定します。\n\nこの問題の場合、sampleモジュールのcom.test.Helloクラスをエントリーポイントとして実行したいので、\n\njava --module-path lib -m sample/com.test.Hello\n\nというコマンドが正しい指定方法となります。\n\n--module-pathでモジュールの場所を指定し、-mでモジュール名とクラス名をスラッシュで区切って記述する点に注意しましょう。",
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
                "module-info.javaでは、モジュールが外部に公開するパッケージをexportsで指定し、依存する他のモジュールをrequiresで指定します。\n\nこの問題では、sampleモジュールがcom.sampleパッケージを公開し、testモジュールを利用しています。\n\n正しい記述は、\n\nexports com.sample;\nrequires test;\n\nとなります。\n\nexportsでパッケージ名（com.sample）を指定し、requiresで依存するモジュール名（test）を指定する点に注意しましょう。\n\nexportやパッケージ名の間違い、requiresの使い方に注意してmodule-info.javaを記述することが大切です。",
        },
        {
            id: 4,
            category: "モジュールシステム",
            difficulty: "中級",
            question:
                "次の図のようなモジュールグラフがあったとき、module1でmodule3に属するパッケージのクラスを利用する際の説明として正しいものを選びなさい。（1つ選択）\n![](img/1Z0-815-JPN_11-004_q.png)",
            code: "",
            choices: [
                "module1のmodule-info.javaで、module2をrequiresで宣言する",
                "module1のmodule-info.javaで、module2をrequires transitiveで宣言する",
                "module2のmodule-info.javaで、module3をrequiresで宣言する",
                "module2のmodule-info.javaで、module3をrequires transitiveで宣言する",
            ],
            answerIndex: 3,
            explanation:
                "モジュールグラフがmodule1 → module2 → module3のようになっている場合、\nmodule1からmodule3のクラスを直接利用したいときは、\n\nmodule2がmodule3に対してrequires transitiveを使って依存関係を宣言する必要があります。\n\nrequires transitiveを使うことで、module2を利用するmodule1も自動的にmodule3を利用できるようになります。\n\nもしtransitiveを付けずに単にrequiresとした場合、module1はmodule3を明示的にrequiresしなければなりません。\n\n依存関係を伝播させたい場合は、requires transitiveを使う点に注意しましょう。",
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
                "Java 9以降のモジュールシステムでは、java.baseモジュールが標準で組み込まれています。\n\nこのモジュールには、StringやSystem、Mathなど、Javaの基本的なクラスが含まれており、すべてのモジュールが自動的にjava.baseに依存します。\n\nそのため、特別な指定をしなくても、java.baseのクラスや機能は常に利用できます。\n\n他のモジュール（例：java.langやjdk.baseなど）は存在しないか、標準で自動的に組み込まれるものではありません。\n\n標準で必ず利用できるのはjava.baseモジュールである点に注意しましょう。",
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
            answerIndex: [0, 2],
            explanation:
                "module-info.javaに設定したモジュールの情報を調べるには、いくつかのコマンドが用意されています。\n\njava --describe-module\nこのコマンドは、指定したモジュールの内容や依存関係、エクスポートしているパッケージなどの詳細情報を表示します。\n\njmod describe\nこのコマンドは、jmodファイル（モジュールパッケージ）の内容や属性を確認するために使います。\n\n一方、jdepsは依存関係の分析ツールであり、--list-depsは依存モジュールの一覧を表示しますが、module-info.javaの内容そのものを直接表示するものではありません。\n\njava --show-module-resolutionは、モジュール解決の過程を表示するコマンドです。\n\nmodule-info.javaの設定内容やモジュールの詳細を確認したい場合は、java --describe-moduleやjmod describeを使うのが適切です。",
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
                "<code>-add</code>",
                "<code>--add-modules</code>",
            ],
            answerIndex: 0,
            explanation:
                "module-info.javaでexportsされていない（非公開の）パッケージを、特定のモジュールやコンパイル時だけ一時的に利用したい場合、\n\n--add-exportsオプションを使います。\n\nこのオプションを使うことで、通常はアクセスできないパッケージを一時的に他のモジュールに公開できます。\n\nたとえば、\n\n--add-exports モジュール名/パッケージ名=ターゲットモジュール\n\nのように指定します。\n\n--exportsや--add-modulesなどの他のオプションでは、exportsされていないパッケージを一時的に公開することはできません。\n\n一時的なアクセス制御のためには--add-exportsを使う点に注意しましょう。",
        },
    ],
};
