'use strict';
 
// タスクを登録するボタンの要素を取得
const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0];
// todolistを挿入する場所の要素を取得
const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0];
// input情報の要素を取得 
const addTaskValue = document.getElementsByClassName('js-addTask-value')[0];
 
 
console.log({addTaskTrigger,addTaskTarget,addTaskValue});
 
 
// 上部にタスクを追加し、完了ボタン、削除ボタンを追加する処理
// 完了ボタン、削除ボタンにはaddEventListenerにより、起動する関数を設定
const addTask = task => {

  // liタグを生成
  const listItem = document.createElement('li');
  // buttonタグを生成
  const removeButton = document.createElement('button');
  // buttonタグを生成
  const completeButton = document.createElement('button');
  // 変数listItemを出力
  console.log(listItem);

  // 指定のタグに完了を挿入
  completeButton.innerText = '完了';
  // 要素.addEventListener(イベント, 関数, オプション);
  completeButton.addEventListener('click', (e) => completeTask(e.target));
  // 指定のタグに削除を挿入
  removeButton.innerText = '削除';
  // 削除ボタンにクリック時に起動する関数を設定
  removeButton.addEventListener('click', () => removeTask(removeButton));
  // 指定のタグに変数taskを挿入
  listItem.innerText = task;
  // listItem要素の子要素に追加
  listItem.append(completeButton);
  listItem.append(removeButton);
  // addTaskTarget要素にlistItem要素を追加
  addTaskTarget.appendChild(listItem);
};
// 変数に引数を設定して実行
addTask("初期タスク")


// タスクを登録ををクリック時に関数を実行 
addTaskTrigger.addEventListener('click', event => {
  // inputで入力した値を変数taskに設定
  const task = addTaskValue.value;
  // 関数を実行し、入力情報をtodolistに追加
  addTask(task);
  // inputタグの中身を空白に
  addTaskValue.value = '';
});
 
// 完了を押した時の取り消し線処理 
const completeTask = completeButton => {
  // completeButton要素の中にあるliタグを取得
  const targetTask = completeButton.closest('li');
  //targetTask要素にクラス isCompleteを設定 このクラスはcssで取り消し線設定
  targetTask.classList.add('isComplete');
  console.log(targetTask);
  // 指定の要素の中にある引数の要素を削除
  targetTask.removeChild(completeButton);
};
 
// タスクを消したときの挙動を記述。
const removeTask = removeButton => {
  //removeButtonの引数を検索し、
const targetTask = removeButton.closest('li');
// この要素のremoveChildの引数kを削除する
addTaskTarget.removeChild(targetTask);
};
