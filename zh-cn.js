/**
 * Created by mengkeys on 16-8-27.
 * Translate orion to simple chinese.
 */

i18n.map('zh', {
    global: {
        save: '保存',
        create: '创建',
        logout: '退出',
        back: '返回',
        cancel: '取消',
        delete: '删除',
        confirm: '确认',
        choose: '选择',
        noPermission: '操作受限',
        passwordNotMatch: '密码匹配失败',
        optional: '可选项'
    },
    accounts: {
        schema: {
            emails: {
                title: '邮箱',
                address: '地址',
                verified: '验证通过'
            },
            password: {
                title: '密码',
                new: '设置密码',
                confirm: '确认密码'
            },
            profile: {
                name: '帐号'
            }
        },
        index: {
            title: '帐号管理',
            noName: 'No Name',
            actions: {
                edit: '编辑',
                sendEnrollmentEmail: '发送电子邮件'
            },
            tableTitles: {
                name: '帐号',
                services: '登录方式',
                email: '邮箱',
                roles: '角色',
                actions: '操作'
            }
        },
        update: {
            title: '帐号更新',
            messages: {
                noPermissions: '无操作权限'
            },
            sections: {
                profile: {
                    title: '帐号资料'
                },
                roles: {
                    title: '用户角色',
                    selectRoles: '选择用户角色'
                },
                changePassword: {
                    title: '修改密码'
                },
                deleteUser: {
                    title: '操作有风险',
                    advice: '删除用户可能导致出错',
                    button: '删除帐号'
                }
            }
        },
        myAccount: {
            title: '我的帐号'
        },
        create: {
            title: '创建帐号',
            createInvitation: '邀请注册',
            createUserNow: '立即创建',
            inviteOther: '邀请其他',
            selectRoles: '指定角色',
            email: '邮箱',
            messages: {
                successfullyCreated: '邀请成功'
            }
        },
        changePassword: {
            title: '修改密码'
        },
        updateProfile: {
            title: '更新资料'
        },
        register: {
            title: '注册帐号',
            registerButton:{
                title:'快速注册'
            },
            fields: {
                email: '邮箱',
                name: '帐号',
                password: '密码',
                confirmPassword: '确认密码'
            },
            messages: {
                invalidEmail: '邮箱无效',
                invalidInvitationCode: '无效的邀请码'
            }
        }
    },
    collections: {
        create: {
            title: '新建{$1}'
        },
        update: {
            title: '更新{$1}'
        },
        delete: {
            title: '删除{$1}',
            confirmQuestion: '您确定要删除{$1}?'
        },
        common: {
            defaultPluralName: '记录',
            defaultSingularName: '记录'
        }
    },
    config: {
        update: {
            title: '系统配置'
        }
    },
    dictionary: {
        update: {
            title: '系统设置'
        }
    },
    filesystem: {
        messages: {
            notFound_id: '未找到文件 [{$i}]',
            errorUploading: '文件上传出错',
            errorRemoving: '移除文件出错'
        }
    },
    pages: {
        schema: {
            title: '标题',
            url: '路径'
        },
        index: {
            title: '页面管理'
        },
        create: {
            title: '新建页面',
            chooseTemplate: '选择页面模板'
        },
        update: {
            title: '更新页面'
        },
        delete: {
            title: '删除页面',
            confirmQuestion: '您确定要删除这个页面?'
        }
    },
    attributes: {
        users: {
            pluralName: '用户',
            singularName: '用户'
        },
        file: {
            choose: '选择文件',
            noFile: '未选择文件'
        },
        image: {
            choose: '选择单张图片'
        },
        images: {
            choose: '选择多张图片',
            clickToRemove: '删除'
        }
    },
    // datatables setting.
    tabular: {
        decimal:        "",
        emptyTable:     "数据集为空",
        info:           "显示 _START_ 到 _END_ 条,总共 _TOTAL_ 条记录",
        infoEmpty:      "显示 0 到 0 条,总共 0 条记录",
        infoFiltered:   "(由 _MAX_ 条结果过滤)",
        infoPostFix:    "orion-lang-zh-cn",
        thousands:      ",",
        lengthMenu:     "每页显示 _MENU_ 条记录",
        loadingRecords: "加载中...",
        processing:     "载入中...",
        search:         "搜索:",
        zeroRecords:    "未匹配到记录",
        paginate: {
            first:      "首页",
            last:       "尾页",
            next:       "下一页",
            previous:   "上一页"
        },
        aria: {
            sortAscending:  ": 对此列升序排列",
            sortDescending: ": 对此列降序排列"
        }
    },
    tableDef: {
        decimal:        "",
        emptyTable:     "数据集为空",
        info:           "显示 _START_ 到 _END_ 条,总共 _TOTAL_ 条记录",
        infoEmpty:      "显示 0 到 0 条,总共 0 条记录",
        infoFiltered:   "(由 _MAX_ 条结果过滤)",
        infoPostFix:    " ",
        thousands:      ",",
        lengthMenu:     "每页显示 _MENU_ 条记录",
        loadingRecords: "加载中...",
        processing:     "载入中...",
        search:         "搜索:",
        zeroRecords:    "未匹配到记录",
        paginate: {
            first:      "首页",
            last:       "尾页",
            next:       "下一页",
            previous:   "上一页"
        },
        aria: {
            sortAscending:  ": 对此列升序排列",
            sortDescending: ": 对此列降序排列"
        }
    }
});