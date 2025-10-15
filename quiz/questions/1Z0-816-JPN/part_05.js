const Q_1Z0_816_JPN_02 = {
    prefix: "1Z0-816-JPN",
    part: "02",
    questions: [
        {
            id: "1",
            category: "入出力",
            difficulty: "初級",
            question: "java.io.Fileクラスに関する説明として、正しいものを選びなさい。（1つ選択）",
            choices: [
                "パスを扱っているだけであって、ファイルやディレクトリそのものを表すわけではない",
                "ファイルは扱えるが、ディレクトリは扱えない",
                "ファイルやディレクトリのどちらも扱うクラスである",
                "Fileオブジェクトをインスタンス化を作ると、ディスク上にファイルが生成される",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "2",
            category: "入出力",
            difficulty: "初級",
            question:
                "java.io.Fileクラスのメソッドで、ディレクトリ内の一覧をFileとして取得するためのものを選びなさい。（1つ選択）",
            choices: ["listメソッド", "filesメソッド", "listFilesメソッド", "getAllメソッド"],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "3",
            category: "入出力",
            difficulty: "初級",
            question:
                "テキストデータを読み込むためのクラスとして、正しいものを選びなさい。（1つ選択）",
            choices: [
                "java.io.InputStream",
                "java.io.Reader",
                "java.io.InputReader",
                "java.io.StreamReader",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "4",
            category: "入出力",
            difficulty: "中級",
            question:
                "写真データを扱うプログラムを開発している。より効率よく写真データを読み込むために使用するクラスとして、正しいものを選びなさい。（1つ選択）",
            choices: [
                "java.io.FileReader",
                "java.io.FileStream",
                "java.io.BufferedReader",
                "java.io.BufferedInputStream",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "5",
            category: "入出力",
            difficulty: "初級",
            question:
                '次のコードの説明として、正しいものを選びなさい。（1つ選択）\n<code>FileWriter out = new FileWriter("output.txt", false);</code>',
            choices: [
                "常に新しいファイルを作成する",
                "対象のファイルが存在しない場合は書き込まない",
                "追記モードで書き込む",
                "上書きモードで書き込む",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "6",
            category: "入出力",
            difficulty: "中級",
            question:
                "java.io.BufferedWriterクラスに関する説明として、正しいものを選びなさい。（1つ選択）",
            choices: [
                "newLineメソッドは、改行コードとしてキャリッジリターンのみを出力する",
                "writeメソッドを実行すると、ファイルに文字列が出力される",
                "flushメソッドはバッファとファイルを同期させる",
                "BufferedWriterクラスは、効率化のために直接ファイルに出力する",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "7",
            category: "入出力",
            difficulty: "中級",
            question:
                "java.io.BufferedInputStreamクラスに関する説明として、正しいものを選びなさい。（1つ選択）",
            choices: [
                "readByteメソッドは、1バイトずつ読み込む",
                "readNBytesメソッドは、1,024バイトずつ読み込む",
                "readKBytesメソッドは、1Kバイトずつ読み取る",
                "readAllBytesメソッドは、すべてのバイトを一度に読み込む",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "8",
            category: "入出力",
            difficulty: "初級",
            question:
                "java.io.ConsoleクラスのreadPasswordメソッドの戻り値の型として、正しいものを選びなさい。（1つ選択）",
            choices: ["char[]", "String", "CharSequence", "InputStream"],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "9",
            category: "入出力",
            difficulty: "中級",
            question:
                '次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n<code> 1.  import java.util.Scanner;\n 2.  public class Exe {\n 3.      public static void main(String[] args) {\n 4.          Scanner scan = new Scanner("A,B,C,D,E");\n 5.          scan.useDelimiter(",");\n 6.          try (scan) {\n 7.              scan.next();\n 8.              scan.next();\n 9.              scan.next();\n10.              scan.next();\n11.              System.out.println(scan.next());\n12.          }\n13.      }\n14.  }</code>',
            choices: [
                "「E」と表示される",
                "「null」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "10",
            category: "入出力",
            difficulty: "初級",
            question:
                "java.io.Serializableインタフェースに関する説明として、正しいものを選びなさい。（1つ選択）",
            choices: [
                "オブジェクトをシリアライズしたいクラスが実装するインタフェースである",
                "シリアライズ対象のクラスは、このインタフェースに定義されているserializeメソッドでシリアライズ処理の内容を実装しなければならない",
                "このインタフェースには、何もメソッドが定義されていない",
                "このインタフェースを実装していなくても、シリアライズは可能である",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "11",
            category: "入出力",
            difficulty: "中級",
            question:
                "カスタム・シリアライズを行うときに、シリアライズ時に呼び出されるメソッドとして、正しいものを選びなさい。（1つ選択）",
            choices: [
                "readStreamメソッド",
                "readObjectメソッド",
                "writeStreamメソッド",
                "writeObjectメソッド",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "12",
            category: "入出力",
            difficulty: "中級",
            question:
                "java.nio.file.Pathを使ったコードとして、コンパイルエラーになるものを選びなさい。なお、Pathsはjava.nio.file.Pathsクラス、Fileはjava.io.Fileクラス、Filesはjava.nio.file.Filesクラスをさす。（1つ選択）",
            choices: [
                '<code>Path path = Paths.get("dir/sample.txt");</code>',
                '<code>Path path = Paths.get("dir", "sample.txt");</code>',
                '<code>Path path = new File("sample.txt").toPath();</code>',
                '<code>Path path = Files.get("sample.txt");</code>',
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "13",
            category: "入出力",
            difficulty: "中級",
            question:
                "java.nio.file.Filesクラスを使ってファイルを作成するとき、誤って既存のファイルと同じパスを指定してしまった。結果として正しいものを選びなさい。（1つ選択）",
            choices: [
                "プログラムは正しく終了し、既存のファイルは空のファイルで上書きされる",
                "プログラムは正しく終了し、既存のファイルにはそのままで何も起こらない",
                "実行時に例外がスローされる",
                "結果を表すOptionalクラスが戻される",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "14",
            category: "入出力",
            difficulty: "中級",
            question:
                'java.nio.file.Pathとjava.nio.file.Filesを使って、新しくファイルを作成しようとしている。次のコードの説明として、正しいものを選びなさい。（1つ選択）\n<code>Path dir = Paths.get("a", "b");\nPath file = dir.resolve(Paths.get("data.txt"));\nFiles.createFile(file);</code>',
            choices: [
                "カレントディレクトリ内にdata.txtができる",
                "a/bディレクトリ内にdata.txtができる",
                "aディレクトリ内にdata.txtができる",
                "bディレクトリ内にdata.txtができる",
                "a/bディレクトリ内にはdata.txtができない",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "15",
            category: "入出力",
            difficulty: "中級",
            question: "java.nio.file.Filesクラスの説明として、正しいものを選びなさい。（2つ選択）",
            choices: [
                "ファイルのコピーを行うには、copyメソッドを使う",
                "ファイルのコピーを行うには、copyFileメソッドを使う",
                "ファイルの移動を行うには、copyメソッドに移動オプションを指定する",
                "ファイルの移動を行うには、moveメソッドを使う",
                "ファイルの移動を行うには、moveFileメソッドを使う",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "16",
            category: "入出力",
            difficulty: "上級",
            question:
                "java.nio.file.Filesクラスを使い、java.io.BufferedWriterを追記モードで取得したい。正しいものを選びなさい。（1つ選択）",
            choices: [
                '<code>Path sample = Paths.get("sample.txt"); BufferedWriter out = Files.newBufferedWriter(sample);</code>',
                '<code>Path sample = Paths.get("sample.txt"); BufferedWriter out = Files.newBufferedWriter(sample, StandardOpenOption.APPEND);</code>',
                '<code>Path sample = Paths.get("sample.txt"); BufferedWriter out = Files.newBufferedWriter(sample, true);</code>',
                '<code>Path sample = Paths.get("sample.txt"); BufferedWriter out = Files.newBufferedWriter(sample, false);</code>',
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "17",
            category: "入出力",
            difficulty: "上級",
            question:
                "java.nio.file.Filesクラスのメソッドで、引数で渡したディレクトリの中にさらにサブディレクトリがあったとき、その中まで含めて再帰的に探索するメソッドとして、正しいものを選びなさい。（1つ選択）",
            choices: ["listメソッド", "walkメソッド", "findメソッド", "listFilesメソッド"],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "18",
            category: "入出力",
            difficulty: "上級",
            question:
                "java.nio.file.FilesクラスのwalkFileTreeメソッドで利用するjava.nio.file.FileVisitorインタフェースがサポートするイベントとして、誤っているものを選びなさい。（1つ選択）",
            choices: [
                "ディレクトリに入るとき",
                "ディレクトリから出るとき",
                "ファイルに遭遇したとき",
                "ファイルの処理が完了したとき",
                "ファイルの処理を終了したとき",
            ],
            answerIndex: "",
            explanation: "",
        },
    ],
};
