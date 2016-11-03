<template>
  <article>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <h1>Api Smaple</h1>
      </div>
      <div class="mdl-cell mdl-cell--12-col">
        <p>Qiitaの新着投稿20件を取得するサンプル</p>
      </div>
      <div class="mdl-cell mdl-cell--12-col mdl-grid">

        <div v-for="(item, index) in listItem" class="qiita-card mdl-cell mdl-cell--6-col mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title mdl-card--expand">
            <h4>{{item.title}}</h4>
            <div class="qiita-card__sub-info">
              <img v-bind:src="item.user.profile_image_url" alt="">
              <strong>{{item.user.id}}</strong>
            </div>
          </div>
          <div class="mdl-card__supporting-text mdl-card--expand">
            {{item.rendered_body}}
          </div>
          <div class="qiita-card__tags">
            <span v-for="tag in item.tags" class="mdl-chip">
              <span class="mdl-chip__text">{{tag.name}}</span>
            </span>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a v-bind:href="item.url" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank">
              View On Qiita
            </a>
          </div>
        </div>

      </div>
    </div>
  </article>
</template>
<script>
export default {
  data () {
    return {
      listItem: []
    };
  },
  mounted () {
    const _this = this;

    const REQUEST_URL = 'https://qiita.com/api/v2/items?per_page=20';

    // リクエスト投げる
    this.$http.get(REQUEST_URL)　
    .then(
      (response) => {
        // 成功時
        let listItem = response.body;
        for (let i = listItem.length - 1; i >= 0; --i) {
          listItem[i].rendered_body = listItem[i].rendered_body.replace(/<\/?[^>]+>/g, '').substring(0, 120) + '...';
        }

        // モデルに入れる
        _this.listItem = listItem;
      },
      (errResponse) => {
        // 失敗時
        console.log(errResponse);
      }
    );
  }
};
</script>