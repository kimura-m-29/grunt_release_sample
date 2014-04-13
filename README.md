grunt_release_sample
====================
gruntを使ったバージョン番号埋め込み、ZIPファイル作成のサンプル

# バージョン番号付け
1. package.jsonのversionを書き換える
2. `grunt replace:version`を実行する
3. index.jsの`var version = "【バージョン番号】"`が`var version = "【package.jsonのversion】"`に置き換わる

# バージョン番号付きでzip生成
1. `grunt compress:archive`を実行する
2. 不要なファイルを除く、プロジェクト内のファイルを固めたdist/archive.【package.jsonのversion】.zipが生成される
