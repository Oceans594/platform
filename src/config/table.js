const ManagerTableList = [
  {
    prop: 'id',
    label: '业务id',
    width: '120',
    titleAlign: 'center',
    sortable: true
  },
  {
    prop: 'date',
    label: '创建时间',
    width: '200',
    titleAlign: 'center',
    sortable: true
  },
  {
    prop: 'bName',
    label: '业务名称',
    width: '100',
    titleAlign: 'center'
  },
  {
    prop: 'sName',
    label: '销售名称',
    width: '100',
    titleAlign: 'center'
  },
  {
    prop: 'cName',
    label: '客户名称',
    width: '100',
    titleAlign: 'center'
  },
  {
    prop: 'bType',
    label: '业务类型',
    width: '',
    titleAlign: 'center'
  },
  {
    prop: 'account',
    label: '账号数',
    width: '90',
    titleAlign: 'center'
  },
  {
    prop: 'model',
    label: '模型',
    width: '',
    titleAlign: 'center'
  },
  {
    prop: 'status',
    label: '状态',
    width: '80',
    titleAlign: 'center',
    tag: true
  },
  {
    prop: 'operate',
    label: '操作',
    width: '160',
    fix: 'right',
    opts: [
      {
        label: '查看',
        type: 'primary',
        size: 'mini'
      },
      {
        label: '编辑',
        type: 'info',
        size: 'mini'
      },
      {
        label: '删除',
        type: 'danger',
        size: 'mini'
      }
    ]
  }
]

export {
  ManagerTableList
}
