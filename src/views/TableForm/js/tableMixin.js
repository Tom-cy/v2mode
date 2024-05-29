// import { getTableDetail } from "@/api/user";
// import { getCookie } from "@/utils/cookie";
// import { parseTime } from "@/utils";
export default {
  data() {
    return {
      tableData: [],
      tableToolbar: {},
      tableColumn: [
        {
          field: "question_name",
          title: "评定项目",
          width: "100px",
          className: "ColFirstVex",
          editRender: { autofocus: ".vxe-input--inner" },
          slots: { edit: "name_edit" }
        }
      ],
      gridOptions: {
        border: true,
        resizable: true,
        // keepSource: true,
        pagerConfig: {
          perfect: true,
          pageSize: 10
        }
      },
      routeInfo: {},
      reportData: {},
      tablelist: [],
      paginationData: {
        limit: 8,
        page: 1
      }
    };
  },
  created() {
    this.routeInfo = this.$route.query;
    // this.getTable();
  },
  computed: {},
  methods: {
    async getTable() {
      const data = {
        dept_id: this.routeInfo.dept_id,
        patient_id: this.routeInfo.patient_id,
        inpatient_no: this.routeInfo.inpatient_no,
        doctor_id: this.routeInfo.doctor_id,
        research_id: this.routeInfo.research_id,
        limit: this.paginationData.limit,
        page: this.paginationData.page
      };
      await getTableDetail(data).then(res => {
        this.reportData = res.data.report_data[0];
        this.$nextTick(() => {
          this.initColumn();
          this.initTableList();
          this.initTableData();
        });
      });
    },
    initColumn() {
      const list = this.reportData;
      const Column = list.report_items.map((v, k) => {
        const tit = parseTime(v.finish_time, "{m}.{d}");
        return {
          title: tit,
          field: "title",
          id: k + 1,
          showOverflow: true,
          children: [],
          slots: { header: "title_header" }
        };
      });

      Column.forEach(v => {
        const fieldlist = [
          { field: `degree${v.id}`, title: "程度" },
          { field: `measure${v.id}`, title: "措施" }
        ];
        v.children = v.children.concat(fieldlist);
      });

      Column.unshift({
        field: "question_name",
        title: "评定项目",
        width: "100px",
        className: "ColFirstVex"
      });
    },
    initTableList() {
      const list = this.reportData;
      const tableCol = JSON.parse(JSON.stringify(this.tableColumn));
      tableCol.shift();
      let tablelists = [];
      const items = list.report_items;
      const questionAnswer = items[0].question_answer;
      const arrlist = [];
      var regex = /((?<=\【)(.+?)(?=\】))/g;
      questionAnswer.reduce((pre, cur) => {
        if (Object.keys(pre).length === 0) {
          arrlist.push(cur);
        } else {
          const result = cur.question_name.split("的");
          if (!pre.question_name.includes(result[0])) {
            arrlist.push(cur);
          }
        }
        return cur;
      }, {});
      tablelists = arrlist.map((v, k) => {
        const strlist = v.question_name.match(regex);
        if (strlist && strlist[0]) {
          const str = strlist[0];
          return {
            question_name: str,
            id: k + 10001
          };
        } else {
          return {
            question_name: v.question_name.split("的")[0],
            id: k + 10001
          };
        }
      });
      tablelists.forEach((v, k) => {
        tableCol.forEach(vv => {
          vv.children.forEach(vvv => {
            v[vvv.field] = "";
          });
        });
      });
      this.tablelist = tablelists;
    },
    initTableData() {
      const list = this.reportData;
      const tablelists = this.tablelist;
      const items = list.report_items;
      for (let i = 0; i < items.length; i++) {
        // 一天的所有数据
        const AI = items[i];
        tablelists.forEach((v, k) => {
          for (let j = 0; j < AI.question_answer.length; j++) {
            const AJ = AI.question_answer[j];
            if (AJ.question_name.includes(v.question_name)) {
              if (AJ.question_name.includes("程度")) {
                v[`degree${i + 1}`] = AJ.answer_score;
              } else if (AJ.question_name.includes("措施")) {
                v[`measure${i + 1}`] = AJ.answer_score;
              }
            }
          }
        });
      }
      this.tableData = tablelists;
    }
  }
};
