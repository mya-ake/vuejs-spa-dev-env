<template>
  <article>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <h1>MDL Samples</h1>
      </div>

      <div class="mdl-cell mdl-cell--12-col">
        <h2>Tabs &amp; Cards</h2>
      </div>
      <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp">

        <div class="my-mdl-tabs mdl-tabs mdl-js-tabs mdl-js-ripple-effect">

          <div class="mdl-tabs__tab-bar">
            <a href="#panel1" class="mdl-tabs__tab mdl-cell mdl-cell--4-col is-active">tab1</a>
            <a href="#panel2" class="mdl-tabs__tab mdl-cell mdl-cell--4-col">tab2</a>
            <a href="#panel3" class="mdl-tabs__tab mdl-cell mdl-cell--4-col">tab3</a>
          </div>

          <div id="panel1" class="mdl-tabs__panel mdl-grid is-active">
            <div class="mdl-cell mdl-cell--12-col">
              <h3>Panel1</h3>
            </div>
          </div>

          <div id="panel2" class="mdl-tabs__panel mdl-grid">
            <div class="mdl-cell mdl-cell--12-col">
              <h3>Panel2</h3>
            </div>
          </div>

          <div id="panel3" class="mdl-tabs__panel mdl-grid">
            <div class="mdl-cell mdl-cell--12-col">
              <h3>Panel3</h3>
            </div>
          </div>

        </div>

      </div>

      <div class="mdl-cell mdl-cell--12-col">
        <h2>Form &amp; Cards</h2>
      </div>
      <div class="mdl-cell mdl-cell--6-col mdl-card mdl-shadow--2dp">

        <form v-on:submit="signIn" action="#" class="mdl-grid">
          <h3 class="mdl-cell mdl-cell--12-col mdl-typography--title mdl-typography--text-center">Sign In Form</h3>
          <div class="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="email" id="email" v-model="email">
            <label class="mdl-textfield__label" for="email">Email Address</label>
            <span class="mdl-textfield__error">メールアドレスを入力してください。</span>
          </div>

          <div class="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="password" id="password" v-model="password">
            <label class="mdl-textfield__label" for="password">Password</label>
            <span class="mdl-textfield__error">パスワードを入力してください。</span>
          </div>

          <div class="mdl-cell mdl-cell--12-col mdl-typography--text-center">
            <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect">
              Sign In
            </button>
          </div>

          <div class="mdl-cell mdl-cell--12-col mdl-typography--text-center">
            <p>{{message}}</p>
          </div>

        </form>
      </div>


    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    signIn: function() {
      this.message = '';
      if (this.email && this.password) {
        this.message = 'success';
      }
    }
  }
}
</script>