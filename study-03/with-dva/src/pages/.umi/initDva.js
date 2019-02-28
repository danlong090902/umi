import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  ...((require('F:/study/umi/study-03/with-dva/src/dva.js').config || (() => ({})))()),
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('F:/study/umi/study-03/with-dva/src/models/global.js').default) });
app.model({ namespace: 'model', ...(require('F:/study/umi/study-03/with-dva/src/pages/index/model.js').default) });
app.model({ namespace: 'a', ...(require('F:/study/umi/study-03/with-dva/src/pages/list/models/a.js').default) });
app.model({ namespace: 'b', ...(require('F:/study/umi/study-03/with-dva/src/pages/list/models/b.js').default) });
app.model({ namespace: 'model', ...(require('F:/study/umi/study-03/with-dva/src/pages/list/search/model.js').default) });
