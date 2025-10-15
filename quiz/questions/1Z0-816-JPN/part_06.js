const Q_1Z0_816_JPN_02 = {
    prefix: "1Z0-816-JPN",
    part: "02",
    questions: [
        {
            id: "1",
            category: "JDBCによるデータベース連携",
            difficulty: "初級",
            question: "JDBCの説明として、正しいものを選びなさい。（1つ選択）",
            choices: [
                "データ操作のためのインタフェースだけが提供されている",
                "DBMSとの連携時に発生する例外クラスが提供されている",
                "DBMSと連携するための実装クラスが含まれている",
                "特定のDBMSを操作するためのインタフェースが提供されている",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "2",
            category: "JDBCによるデータベース連携",
            difficulty: "初級",
            question:
                "JDBCを用いてデータベースに接続するためのURLとして、正しいものを選びなさい。（1つ選択）",
            choices: [
                "jdbc:postgresql:localhost:test",
                "jdbc:oracle/localhost:test",
                "jdbc:mysql://localhost/test",
                "jdbc:db2@localhost/test",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "3",
            category: "JDBCによるデータベース連携",
            difficulty: "初級",
            question:
                "JDBCを使用してデータベースと接続するクラス、およびメソッドとして正しいものを選びなさい。（1つ選択）",
            choices: [
                "ConnectionクラスのgetConnectionメソッド",
                "ConnectionManagerクラスのgetConnectionメソッド",
                "DriverクラスのgetConnectionメソッド",
                "DriverManagerクラスのgetConnectionメソッド",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "4",
            category: "JDBCによるデータベース連携",
            difficulty: "初級",
            question:
                "JDBCを利用してDBMSと連携するプログラムを作っている。DBMSとの接続を解除するためのメソッドとして、正しいものを選びなさい。（1つ選択）",
            choices: [
                "ResultSetのcloseメソッド",
                "ResultSetのfinalizeメソッド",
                "Connectionのcloseメソッド",
                "Connectionのfinalizeメソッド",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "5",
            category: "JDBCによるデータベース連携",
            difficulty: "中級",
            question:
                "JDBCで提供されているインタフェースのうち、パラメータを受け取らないSQLを実行するためのものを選びなさい。（1つ選択）",
            choices: [
                "java.sql.Statement",
                "java.sql.PreparedStatement",
                "java.sql.CallableStatement",
                "java.sql.NonParameterizedStatement",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "6",
            category: "JDBCによるデータベース連携",
            difficulty: "中級",
            question:
                "PreparedStatementオブジェクトを取得する方法として、正しいものを選びなさい。なお、変数conはConnectionオブジェクトとする。（1つ選択）",
            choices: [
                "<code>PreparedStatement ps = con.prepareStatement();</code>",
                '<code>PreparedStatement ps = con.prepareStatement("select * from emp");</code>',
                '<code>var ps = con.getPreparedStatement("select * from emp");</code>',
                '<code>var ps = con.createPreparedStatement("select * from emp");</code>',
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "7",
            category: "JDBCによるデータベース連携",
            difficulty: "中級",
            question:
                '次のコードをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n<code>var sql = "delete from item where id = ?";\ntry (var ps = con.prepareStatement(sql)){\n    ps.setInt(0, 1);\n    ps.executeUpdate();\n}</code>',
            choices: [
                "プログラムは正常に動作し、データベースから1件のデータが削除される",
                "プログラムは正常に動作し、データベースからレコードが削除されることはない",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "8",
            category: "JDBCによるデータベース連携",
            difficulty: "中級",
            question:
                '次のコードをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n<code>var sql = "select * from item where id = ?";\ntry (var ps = con.prepareStatement(sql)){\n    ResultSet rs = ps.executeQuery();\n    // do something\n}</code>',
            choices: [
                "0件の検索結果が表示される",
                "全件の検索結果が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "9",
            category: "JDBCによるデータベース連携",
            difficulty: "中級",
            question:
                "JDBCを使ったデータベースプログラミングをしている。UPDATE文を実行した結果、何件更新されたかを調べたい。PreparedStatementのメソッドとして、最も適切なものを選びなさい。（1つ選択）",
            choices: [
                "executeUpdateメソッド",
                "executeQueryメソッド",
                "executeメソッド",
                "executeBatchメソッド",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "10",
            category: "JDBCによるデータベース連携",
            difficulty: "中級",
            question:
                '次のコードをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n<code>var sql = "delete from item where id = ?";\ntry (var ps = con.prepareStatement(sql)){\n    ps.setInt(1, 1);\n    ps.executeUpdate("update item set name=\'test\' where id = ?");\n}</code>',
            choices: [
                "DELETE文が実行される",
                "UPDATE文が実行される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "11",
            category: "JDBCによるデータベース連携",
            difficulty: "中級",
            question:
                '次のコードをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n\n<code>var sql = "select * from emp";\ntry (PreparedStatement ps = con.prepareStatement(sql)){\n    ResultSet rs = ps.executeQuery();\n    System.out.println(rs.getString(2));\n}</code>\n\nなお、検索を対象となるempテーブルは、以下のレコードが登録されているものとする。\n\nID | NAME  | DEPARTMENT\n:--|:-----:|:-----------\n1  | ALLEN | R&D\n2  | SCOTT | SALES\n3  | BILL  | ACCOUNTING',
            choices: [
                "「1」と表示される",
                "「2」と表示される",
                "「ALLEN」と表示される",
                "「SCOTT」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "12",
            category: "JDBCによるデータベース連携",
            difficulty: "中級",
            question:
                '次のコードをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n\n<code>var sql = "select count(*) from item";\ntry (PreparedStatement ps = con.prepareStatement(sql)){\n    System.out.println(ps.execute());\n}</code>\n\nなお、検索を対象となるitemテーブルは、以下のレコードが登録されているものとする。\n\nid | name\n:--|:-----\n1  | banana\n2  | apple\n3  | orange',
            choices: [
                "「false」と表示される",
                "「true」と表示される",
                "「2」と表示される",
                "「3」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "13",
            category: "JDBCによるデータベース連携",
            difficulty: "中級",
            question:
                "JDBCを利用したプログラムで、一度に複数のSQL文を実行するためのメソッドとして、正しいものを選びなさい。（1つ選択）",
            choices: [
                "PreparedStatementインタフェースのexecuteMultiメソッド",
                "PreparedStatementインタフェースのexecuteUpdateメソッド",
                "StatementインタフェースのexecuteBatchメソッド",
                "StatementインタフェースのexecuteMultiメソッド",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "14",
            category: "JDBCによるデータベース連携",
            difficulty: "中級",
            question:
                'データベースに登録済みのストアド・プロシージャsample_procを実行するプログラムを作成している。以下の「/* insert code here */」に入るコードとして、正しいものを選びなさい。（1つ選択）\n\n<code>try (/* insert code here */) {\n    cs.setString(1, "test");\n    cs.setInt(2, 1);\n    cs.execute();\n}</code>',
            choices: [
                '<code>var cs = con.prepareCall("sample_proc(?, ?)");</code>',
                '<code>var cs = con.prepareCall("call sample_proc(?, ?)");</code>',
                '<code>var cs = con.prepareStatement("sample_proc(?, ?)");</code>',
                '<code>var cs = con.prepareStatement("call sample_proc(?, ?)");</code>',
            ],
            answerIndex: "",
            explanation: "",
        },
    ],
};
