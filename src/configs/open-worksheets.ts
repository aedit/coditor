import { FileStructure, WorksheetResponse } from '../contexts/Files.types';

const mockWorksheetsData: { activeWorksheets: FileStructure[] } = {
  activeWorksheets: [
    {
      relativePath: 'DBT_TEST/dbt_project.yml',
      name: 'dbt_project.yml',
      pathType: 'file',
      depth: 1,
      index: 3,
      gitStatus: null,
      editorContent:
        '\r\n# Name your project! Project names should contain only lowercase characters\r\n# and underscores. A good package name should reflect your organization\'s\r\n# name or the intended use of these models\r\nname: \'lineage_test\'\r\nversion: \'1.0.0\'\r\nconfig-version: 2\r\n\r\n# This setting configures which "profile" dbt uses for this project.\r\nprofile: \'snowflake\'\r\n\r\n# These configurations specify where dbt should look for different types of files.\r\n# The `source-paths` config, for example, states that models in this project can be\r\n# found in the "models/" directory. You probably won\'t need to change these!\r\nmodel-paths: ["models"]\r\n#analysis-paths: ["analyses"]\r\n#test-paths: ["tests"]\r\n#seed-paths: ["seeds"]\r\nmacro-paths: ["macros"]\r\n#snapshot-paths: ["snapshots"]\r\n\r\ntarget-path: "target"  # directory which will store compiled SQL files\r\nclean-targets:         # directories to be removed by `dbt clean`\r\n  - "target"\r\n  - "dbt_packages"\r\n\r\n\r\n# Configuring models\r\n# Full documentation: https://docs.getdbt.com/docs/configuring-models\r\n\r\n# In this example config, we tell dbt to build all models in the example/ directory\r\n# as tables. These settings can be overridden in the individual model files\r\n# using the `{{ config(...) }}` macro.\r\n--"SNOWFLAKE_SAMPLE_DATA"."TPCDS_SF100TCL"."CALL_CENTER"\r\n--SELECT "CP_CATALOG_PAGE_SK", "CP_CATALOG_PAGE_ID", "CP_START_DATE_SK", "CP_END_DATE_SK", "CP_DEPARTMENT", "CP_CATALOG_NUMBER", "CP_CATALOG_PAGE_NUMBER", "CP_DESCRIPTION", "CP_TYPE" FROM SNOWFLAKE_SAMPLE_DATA.TPCDS_SF100TCL.CATALOG_PAGE',
      modifiedContent:
        '\r\n# Name your project! Project names should contain only lowercase characters\r\n# and underscores. A good package name should reflect your organization\'s\r\n# name or the intended use of these models\r\nname: \'lineage_test\'\r\nversion: \'1.0.0\'\r\nconfig-version: 2\r\n\r\n# This setting configures which "profile" dbt uses for this project.\r\nprofile: \'snowflake\'\r\n\r\n# These configurations specify where dbt should look for different types of files.\r\n# The `source-paths` config, for example, states that models in this project can be\r\n# found in the "models/" directory. You probably won\'t need to change these!\r\nmodel-paths: ["models"]\r\n#analysis-paths: ["analyses"]\r\n#test-paths: ["tests"]\r\n#seed-paths: ["seeds"]\r\nmacro-paths: ["macros"]\r\n#snapshot-paths: ["snapshots"]\r\n\r\ntarget-path: "target"  # directory which will store compiled SQL files\r\nclean-targets:         # directories to be removed by `dbt clean`\r\n  - "target"\r\n  - "dbt_packages"\r\n\r\n\r\n# Configuring models\r\n# Full documentation: https://docs.getdbt.com/docs/configuring-models\r\n\r\n# In this example config, we tell dbt to build all models in the example/ directory\r\n# as tables. These settings can be overridden in the individual model files\r\n# using the `{{ config(...) }}` macro.\r\n--"SNOWFLAKE_SAMPLE_DATA"."TPCDS_SF100TCL"."CALL_CENTER"\r\n--SELECT "CP_CATALOG_PAGE_SK", "CP_CATALOG_PAGE_ID", "CP_START_DATE_SK", "CP_END_DATE_SK", "CP_DEPARTMENT", "CP_CATALOG_NUMBER", "CP_CATALOG_PAGE_NUMBER", "CP_DESCRIPTION", "CP_TYPE" FROM SNOWFLAKE_SAMPLE_DATA.TPCDS_SF100TCL.CATALOG_PAGE',
      gitIgnored: false,
      worksheetType: 'git',
      repositoryId: '07654950-95d1-4f2d-aac2-c8d147849f03',
      branch: 'dev',
      role: 'ACCOUNTADMIN',
      warehouse: 'COMPUTE_WH',
      content:
        '\r\n# Name your project! Project names should contain only lowercase characters\r\n# and underscores. A good package name should reflect your organization\'s\r\n# name or the intended use of these models\r\nname: \'lineage_test\'\r\nversion: \'1.0.0\'\r\nconfig-version: 2\r\n\r\n# This setting configures which "profile" dbt uses for this project.\r\nprofile: \'snowflake\'\r\n\r\n# These configurations specify where dbt should look for different types of files.\r\n# The `source-paths` config, for example, states that models in this project can be\r\n# found in the "models/" directory. You probably won\'t need to change these!\r\nmodel-paths: ["models"]\r\n#analysis-paths: ["analyses"]\r\n#test-paths: ["tests"]\r\n#seed-paths: ["seeds"]\r\nmacro-paths: ["macros"]\r\n#snapshot-paths: ["snapshots"]\r\n\r\ntarget-path: "target"  # directory which will store compiled SQL files\r\nclean-targets:         # directories to be removed by `dbt clean`\r\n  - "target"\r\n  - "dbt_packages"\r\n\r\n\r\n# Configuring models\r\n# Full documentation: https://docs.getdbt.com/docs/configuring-models\r\n\r\n# In this example config, we tell dbt to build all models in the example/ directory\r\n# as tables. These settings can be overridden in the individual model files\r\n# using the `{{ config(...) }}` macro.\r\n--"SNOWFLAKE_SAMPLE_DATA"."TPCDS_SF100TCL"."CALL_CENTER"\r\n--SELECT "CP_CATALOG_PAGE_SK", "CP_CATALOG_PAGE_ID", "CP_START_DATE_SK", "CP_END_DATE_SK", "CP_DEPARTMENT", "CP_CATALOG_NUMBER", "CP_CATALOG_PAGE_NUMBER", "CP_DESCRIPTION", "CP_TYPE" FROM SNOWFLAKE_SAMPLE_DATA.TPCDS_SF100TCL.CATALOG_PAGE',
    },
    {
      relativePath: 'DBT_TEST/models/intermediate/int_reason.sql',
      name: 'int_reason.sql',
      pathType: 'file',
      depth: 3,
      index: 29,
      gitStatus: 'modified',
      editorContent:
        "{{\r\n\tconfig(\r\n\t\tschema = 'intermediate',\r\n        materialized = 'table',\r\n        tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith wallet_drivers as (\r\n    select * from {{source('tpch_ton','supplier')}} wu join {{source('tpch_ton','lineitem')}} dm\r\n)\r\n\r\n, earnings as (\r\n    select *\r\n    from {{source('tpch_ton','nation')}} e inner join wallet_drivers wu\r\n)\r\n\r\n, int_payout as (\r\n    select *\r\n    from earnings e left join {{source('tpcds_ton','reason')}} o \r\n    left join {{ref('stg_tpch_one_customer')}} ba \r\n    left join {{ref('stg_tpcds_ton_inventory')}} d \r\n    left join {{ref('stg_tpcds_ton_warehouse')}} v \r\n    left join {{ref('int_tpch_ten_part')}} vc \r\n    left join {{ref('int_tpcds_ton_warehouse')}} gvt \r\n    left join {{ref('int_store_sale_promotion')}} pp \r\n    left join {{ref('stg_tpcds_ton_catalog_returns')}} dtr\r\n)\r\n\r\nselect * from int_payout",
      modifiedContent:
        "{{\r\n\tconfig(\r\n\t\tschema = 'intermediate',\r\n    materialized = 'table',\r\n    tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith necessary_orders as (\r\n    select *\r\n    from {{source('tpcds_ton','reason')}} o\r\n    left join {{ref('stg_tpcds_ton_inventory')}} d \r\n    left join {{ref('stg_tpch_one_customer')}} ba \r\n    left join {{ref('int_store_sale_promotion')}} pp \r\n    left join {{ref('stg_tpcds_ton_catalog_returns')}} dtr \r\n  \r\n)\r\n\r\n, order_fares_table as (\r\n    select * from {{source('tpcds_ton','store')}}\r\n)\r\n\r\n, discount_cte as (\r\n  select *\r\n  from {{ref('stg_tpcds_ton_customer')}} dt \r\n  join {{ref('stg_tpcds_ton_catalog_sales')}} dc \r\n  join {{source('tpcds_ton','reason')}} o \r\n  left join order_fares_table orf \r\n  left join necessary_orders n\r\n)\r\n\r\n, dum as (\r\n  select *\r\n  from necessary_orders as a\r\n  left join order_fares_table as b \r\n  left join {{ref('stg_tpcds_ton_warehouse')}}\r\n  left join {{ref('int_tpch_ten_part')}} \r\n  left join {{ref('int_tpcds_ton_warehouse')}} \r\n  left join discount_cte \r\n  group by all\r\n)\r\n\r\nselect * from dum",
      gitIgnored: false,
      worksheetType: 'git',
      repositoryId: '07654950-95d1-4f2d-aac2-c8d147849f03',
      branch: 'dev',
      role: 'ACCOUNTADMIN',
      warehouse: 'COMPUTE_WH',
      content:
        "{{\r\n\tconfig(\r\n\t\tschema = 'intermediate',\r\n    materialized = 'table',\r\n    tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith necessary_orders as (\r\n    select *\r\n    from {{source('tpcds_ton','reason')}} o\r\n    left join {{ref('stg_tpcds_ton_inventory')}} d \r\n    left join {{ref('stg_tpch_one_customer')}} ba \r\n    left join {{ref('int_store_sale_promotion')}} pp \r\n    left join {{ref('stg_tpcds_ton_catalog_returns')}} dtr \r\n  \r\n)\r\n\r\n, order_fares_table as (\r\n    select * from {{source('tpcds_ton','store')}}\r\n)\r\n\r\n, discount_cte as (\r\n  select *\r\n  from {{ref('stg_tpcds_ton_customer')}} dt \r\n  join {{ref('stg_tpcds_ton_catalog_sales')}} dc \r\n  join {{source('tpcds_ton','reason')}} o \r\n  left join order_fares_table orf \r\n  left join necessary_orders n\r\n)\r\n\r\n, dum as (\r\n  select *\r\n  from necessary_orders as a\r\n  left join order_fares_table as b \r\n  left join {{ref('stg_tpcds_ton_warehouse')}}\r\n  left join {{ref('int_tpch_ten_part')}} \r\n  left join {{ref('int_tpcds_ton_warehouse')}} \r\n  left join discount_cte \r\n  group by all\r\n)\r\n\r\nselect * from dum",
    },
    {
      relativePath: 'DBT_TEST/models/intermediate/int_warehouse.sql',
      name: 'int_warehouse.sql',
      pathType: 'file',
      depth: 3,
      index: 34,
      gitStatus: null,
      editorContent:
        "{{\r\n\tconfig(\r\n\t\tschema = 'intermediate',\r\n    materialized = 'table',\r\n    tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith necessary_orders as (\r\n    select *\r\n    from {{source('tpcds_ton','reason')}} o\r\n    left join {{ref('stg_tpcds_ton_inventory')}} d \r\n    left join {{ref('stg_tpch_one_customer')}} ba \r\n    left join {{ref('int_store_sale_promotion')}} pp \r\n    left join {{ref('stg_tpcds_ton_catalog_returns')}} dtr \r\n  \r\n)\r\n\r\n, order_fares_table as (\r\n    select * from {{source('tpcds_ton','store')}}\r\n)\r\n\r\n, discount_cte as (\r\n  select *\r\n  from {{ref('stg_tpcds_ton_customer')}} dt \r\n  join {{ref('stg_tpcds_ton_catalog_sales')}} dc \r\n  join {{source('tpcds_ton','reason')}} o \r\n  left join order_fares_table orf \r\n  left join necessary_orders n\r\n)\r\n\r\n, dum as (\r\n  select *\r\n  from necessary_orders as a\r\n  left join order_fares_table as b \r\n  left join {{ref('stg_tpcds_ton_warehouse')}}\r\n  left join {{ref('int_tpch_ten_part')}} \r\n  left join {{ref('int_tpcds_ton_warehouse')}} \r\n  left join discount_cte \r\n  group by all\r\n)\r\n\r\nselect * from dum",
      modifiedContent:
        "{{\r\n\tconfig(\r\n\t\tschema = 'intermediate',\r\n    materialized = 'table',\r\n    tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith necessary_orders as (\r\n    select *\r\n    from {{source('tpcds_ton','reason')}} o\r\n    left join {{ref('stg_tpcds_ton_inventory')}} d \r\n    left join {{ref('stg_tpch_one_customer')}} ba \r\n    left join {{ref('int_store_sale_promotion')}} pp \r\n    left join {{ref('stg_tpcds_ton_catalog_returns')}} dtr \r\n  \r\n)\r\n\r\n, order_fares_table as (\r\n    select * from {{source('tpcds_ton','store')}}\r\n)\r\n\r\n, discount_cte as (\r\n  select *\r\n  from {{ref('stg_tpcds_ton_customer')}} dt \r\n  join {{ref('stg_tpcds_ton_catalog_sales')}} dc \r\n  join {{source('tpcds_ton','reason')}} o \r\n  left join order_fares_table orf \r\n  left join necessary_orders n\r\n)\r\n\r\n, dum as (\r\n  select *\r\n  from necessary_orders as a\r\n  left join order_fares_table as b \r\n  left join {{ref('stg_tpcds_ton_warehouse')}}\r\n  left join {{ref('int_tpch_ten_part')}} \r\n  left join {{ref('int_tpcds_ton_warehouse')}} \r\n  left join discount_cte \r\n  group by all\r\n)\r\n\r\nselect * from dum",
      gitIgnored: false,
      worksheetType: 'git',
      repositoryId: '07654950-95d1-4f2d-aac2-c8d147849f03',
      branch: 'dev',
      role: 'ACCOUNTADMIN',
      warehouse: 'COMPUTE_WH',
      content:
        "{{\r\n\tconfig(\r\n\t\tschema = 'intermediate',\r\n    materialized = 'table',\r\n    tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith necessary_orders as (\r\n    select *\r\n    from {{source('tpcds_ton','reason')}} o\r\n    left join {{ref('stg_tpcds_ton_inventory')}} d \r\n    left join {{ref('stg_tpch_one_customer')}} ba \r\n    left join {{ref('int_store_sale_promotion')}} pp \r\n    left join {{ref('stg_tpcds_ton_catalog_returns')}} dtr \r\n  \r\n)\r\n\r\n, order_fares_table as (\r\n    select * from {{source('tpcds_ton','store')}}\r\n)\r\n\r\n, discount_cte as (\r\n  select *\r\n  from {{ref('stg_tpcds_ton_customer')}} dt \r\n  join {{ref('stg_tpcds_ton_catalog_sales')}} dc \r\n  join {{source('tpcds_ton','reason')}} o \r\n  left join order_fares_table orf \r\n  left join necessary_orders n\r\n)\r\n\r\n, dum as (\r\n  select *\r\n  from necessary_orders as a\r\n  left join order_fares_table as b \r\n  left join {{ref('stg_tpcds_ton_warehouse')}}\r\n  left join {{ref('int_tpch_ten_part')}} \r\n  left join {{ref('int_tpcds_ton_warehouse')}} \r\n  left join discount_cte \r\n  group by all\r\n)\r\n\r\nselect * from dum",
    },
    {
      relativePath: 'DBT_TEST/models/intermediate/python.py',
      name: 'python.py',
      pathType: 'file',
      depth: 3,
      index: 32,
      gitStatus: 'untracked',
      editorContent: '',
      modifiedContent:
        'def multiply_with_cube(numbers):\n    """Multiply each number in the list by its cube and print the result."""\n    for number in numbers:\n        cube = number ** 3\n        result = number * cube\n        print(f"{number} * {number}^3 = {result}")\n\ndef main():\n    # Example list of numbers\n    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]\n\n    # Call the function to multiply each number with its cube and print the result\n    multiply_with_cube(numbers)\n\nif __name__ == "__main__":\n    main()\n',
      gitIgnored: false,
      worksheetType: 'git',
      repositoryId: '07654950-95d1-4f2d-aac2-c8d147849f03',
      branch: 'dev',
      role: 'ACCOUNTADMIN',
      warehouse: 'COMPUTE_WH',
      content:
        'def multiply_with_cube(numbers):\n    """Multiply each number in the list by its cube and print the result."""\n    for number in numbers:\n        cube = number ** 3\n        result = number * cube\n        print(f"{number} * {number}^3 = {result}")\n\ndef main():\n    # Example list of numbers\n    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]\n\n    # Call the function to multiply each number with its cube and print the result\n    multiply_with_cube(numbers)\n\nif __name__ == "__main__":\n    main()\n',
    },
    {
      relativePath: 'DBT_TEST/models/mart/call_center.sql',
      name: 'call_center.sql',
      pathType: 'file',
      depth: 3,
      index: 9,
      gitStatus: null,
      editorContent:
        "{{\r\n\tconfig(\r\n\t\tschema = 'mart',\r\n    \tmaterialized = 'table',\r\n        tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith redeem_rewards as (\r\n  select *\r\n  from {{source('tpcds_ton','catalog_page')}} as a\r\n  left join {{source('tpcds_ton','call_center')}} as b o\r\n)\r\n  \r\n, porter_coins as (\r\n  select rr.updated_at:: date as redeem_coins_day\r\n    , c.geo_region_id\r\n    , sum(redeemed_coins) as coins_dbt\r\n  from {{source('tpcds_ton','web_returns')}}  rr\r\n  left join {{source('tpcds_ton','call_center')}} \r\n)\r\n  \r\n, call_center as (\r\n  select *\r\n  from {{ref('int_warehouse')}} as spot_cost left join  {{ref('int_tpcds_ton_item')}}\r\n)\r\n\r\nselect * from call_center",
      modifiedContent:
        "{{\r\n\tconfig(\r\n\t\tschema = 'mart',\r\n    \tmaterialized = 'table',\r\n        tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith redeem_rewards as (\r\n  select *\r\n  from {{source('tpcds_ton','catalog_page')}} as a\r\n  left join {{source('tpcds_ton','call_center')}} as b o\r\n)\r\n  \r\n, porter_coins as (\r\n  select rr.updated_at:: date as redeem_coins_day\r\n    , c.geo_region_id\r\n    , sum(redeemed_coins) as coins_dbt\r\n  from {{source('tpcds_ton','web_returns')}}  rr\r\n  left join {{source('tpcds_ton','call_center')}} \r\n)\r\n  \r\n, call_center as (\r\n  select *\r\n  from {{ref('int_warehouse')}} as spot_cost left join  {{ref('int_tpcds_ton_item')}}\r\n)\r\n\r\nselect * from call_center",
      gitIgnored: false,
      worksheetType: 'git',
      repositoryId: '07654950-95d1-4f2d-aac2-c8d147849f03',
      branch: 'dev',
      role: 'ACCOUNTADMIN',
      warehouse: 'COMPUTE_WH',
      content:
        "{{\r\n\tconfig(\r\n\t\tschema = 'mart',\r\n    \tmaterialized = 'table',\r\n        tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith redeem_rewards as (\r\n  select *\r\n  from {{source('tpcds_ton','catalog_page')}} as a\r\n  left join {{source('tpcds_ton','call_center')}} as b o\r\n)\r\n  \r\n, porter_coins as (\r\n  select rr.updated_at:: date as redeem_coins_day\r\n    , c.geo_region_id\r\n    , sum(redeemed_coins) as coins_dbt\r\n  from {{source('tpcds_ton','web_returns')}}  rr\r\n  left join {{source('tpcds_ton','call_center')}} \r\n)\r\n  \r\n, call_center as (\r\n  select *\r\n  from {{ref('int_warehouse')}} as spot_cost left join  {{ref('int_tpcds_ton_item')}}\r\n)\r\n\r\nselect * from call_center",
    },
    {
      relativePath: 'DBT_TEST/models/mart/final_model.sql',
      name: 'final_model.sql',
      pathType: 'file',
      depth: 3,
      index: 6,
      gitStatus: null,
      editorContent:
        "{{\r\n\tconfig(\r\n\t\tschema = 'mart',\r\n    \tmaterialized = 'table',\r\n        tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith final_model as (\r\n    select *\r\n\tfrom {{ref('warehouse')}} \r\n\tleft join {{ref('fare_reason')}} \r\n\tleft join {{ref('reason')}} \r\n\tleft join {{ref('warehouse_item')}} \r\n\tleft join {{ref('store_reason')}} \r\n\tleft join {{ref('promotion')}} \r\n\tleft join {{ref('web_sales')}} \r\n\tleft join {{ref('warehouse_region')}} \r\n\tleft join {{ref('call_center')}}\r\n\tleft join {{ref('item')}} \r\n)\r\n\r\nselect * from final_model ",
      modifiedContent:
        "{{\r\n\tconfig(\r\n\t\tschema = 'mart',\r\n    \tmaterialized = 'table',\r\n        tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith final_model as (\r\n    select *\r\n\tfrom {{ref('warehouse')}} \r\n\tleft join {{ref('fare_reason')}} \r\n\tleft join {{ref('reason')}} \r\n\tleft join {{ref('warehouse_item')}} \r\n\tleft join {{ref('store_reason')}} \r\n\tleft join {{ref('promotion')}} \r\n\tleft join {{ref('web_sales')}} \r\n\tleft join {{ref('warehouse_region')}} \r\n\tleft join {{ref('call_center')}}\r\n\tleft join {{ref('item')}} \r\n)\r\n\r\nselect * from final_model ",
      gitIgnored: false,
      worksheetType: 'git',
      repositoryId: '07654950-95d1-4f2d-aac2-c8d147849f03',
      branch: 'dev',
      role: 'ACCOUNTADMIN',
      warehouse: 'COMPUTE_WH',
      content:
        "{{\r\n\tconfig(\r\n\t\tschema = 'mart',\r\n    \tmaterialized = 'table',\r\n        tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith final_model as (\r\n    select *\r\n\tfrom {{ref('warehouse')}} \r\n\tleft join {{ref('fare_reason')}} \r\n\tleft join {{ref('reason')}} \r\n\tleft join {{ref('warehouse_item')}} \r\n\tleft join {{ref('store_reason')}} \r\n\tleft join {{ref('promotion')}} \r\n\tleft join {{ref('web_sales')}} \r\n\tleft join {{ref('warehouse_region')}} \r\n\tleft join {{ref('call_center')}}\r\n\tleft join {{ref('item')}} \r\n)\r\n\r\nselect * from final_model ",
    },
    {
      relativePath: 'DBT_TEST/models/mart/promotion.sql',
      name: 'promotion.sql',
      pathType: 'file',
      depth: 3,
      index: 13,
      gitStatus: null,
      editorContent:
        "{{\r\n\tconfig(\r\n\t\tschema = 'mart',\r\n    \tmaterialized = 'table',\r\n        tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\n\r\nwith pfe as (\r\n    select *\r\n    from {{source('tpcds_ton','reason')}} o\r\n    left join {{ref('stg_tpcds_ton_inventory')}} d \r\n    left join {{ref('stg_tpch_one_customer')}} ba \r\n    left join {{ref('stg_tpcds_ton_warehouse')}} v \r\n    left join {{ref('int_tpch_ten_part')}} vc \r\n    left join {{ref('int_tpcds_ton_warehouse')}} gvt \r\n    left join {{ref('int_store_sale_promotion')}} pp \r\n    left join {{ref('stg_tpcds_ton_catalog_returns')}} dtr \r\n    )\r\n\r\nselect * from pfe ",
      modifiedContent:
        "{{\r\n\tconfig(\r\n\t\tschema = 'mart',\r\n    \tmaterialized = 'table',\r\n        tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\n\r\nwith pfe as (\r\n    select *\r\n    from {{source('tpcds_ton','reason')}} o\r\n    left join {{ref('stg_tpcds_ton_inventory')}} d \r\n    left join {{ref('stg_tpch_one_customer')}} ba \r\n    left join {{ref('stg_tpcds_ton_warehouse')}} v \r\n    left join {{ref('int_tpch_ten_part')}} vc \r\n    left join {{ref('int_tpcds_ton_warehouse')}} gvt \r\n    left join {{ref('int_store_sale_promotion')}} pp \r\n    left join {{ref('stg_tpcds_ton_catalog_returns')}} dtr \r\n    )\r\n\r\nselect * from pfe ",
      gitIgnored: false,
      worksheetType: 'git',
      repositoryId: '07654950-95d1-4f2d-aac2-c8d147849f03',
      branch: 'dev',
      role: 'ACCOUNTADMIN',
      warehouse: 'COMPUTE_WH',
      content:
        "{{\r\n\tconfig(\r\n\t\tschema = 'mart',\r\n    \tmaterialized = 'table',\r\n        tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\n\r\nwith pfe as (\r\n    select *\r\n    from {{source('tpcds_ton','reason')}} o\r\n    left join {{ref('stg_tpcds_ton_inventory')}} d \r\n    left join {{ref('stg_tpch_one_customer')}} ba \r\n    left join {{ref('stg_tpcds_ton_warehouse')}} v \r\n    left join {{ref('int_tpch_ten_part')}} vc \r\n    left join {{ref('int_tpcds_ton_warehouse')}} gvt \r\n    left join {{ref('int_store_sale_promotion')}} pp \r\n    left join {{ref('stg_tpcds_ton_catalog_returns')}} dtr \r\n    )\r\n\r\nselect * from pfe ",
    },
    {
      relativePath: 'DBT_TEST/models/mart/item.sql',
      name: 'item.sql',
      pathType: 'file',
      depth: 3,
      index: 14,
      gitStatus: null,
      editorContent:
        "{{\r\n\tconfig(\r\n\t\tschema = 'mart',\r\n    materialized = 'table',\r\n    tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith overall_orders as (\r\n  select * \r\n  from {{source('tpcds_ton','reason')}} o \r\n  left join {{ref('stg_tpcds_ton_inventory')}} d \r\n  left join {{ref('stg_tpcds_ton_warehouse')}} as \r\n  left join {{ref('int_tpch_ten_part')}} as vc \r\n  left join {{ref('int_tpcds_ton_item')}} gzm \r\n  left join {{ref('int_tpcds_ton_warehouse')}} gvt \r\n  left join {{ref('int_store_sale_promotion')}} pp \r\n  left join {{ref('stg_tpcds_ton_catalog_returns')}} dtr \r\n)\r\n\r\nselect * from overall_orders \r\n ",
      modifiedContent:
        "{{\r\n\tconfig(\r\n\t\tschema = 'mart',\r\n    materialized = 'table',\r\n    tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith overall_orders as (\r\n  select * \r\n  from {{source('tpcds_ton','reason')}} o \r\n  left join {{ref('stg_tpcds_ton_inventory')}} d \r\n  left join {{ref('stg_tpcds_ton_warehouse')}} as \r\n  left join {{ref('int_tpch_ten_part')}} as vc \r\n  left join {{ref('int_tpcds_ton_item')}} gzm \r\n  left join {{ref('int_tpcds_ton_warehouse')}} gvt \r\n  left join {{ref('int_store_sale_promotion')}} pp \r\n  left join {{ref('stg_tpcds_ton_catalog_returns')}} dtr \r\n)\r\n\r\nselect * from overall_orders \r\n ",
      gitIgnored: false,
      worksheetType: 'git',
      repositoryId: '07654950-95d1-4f2d-aac2-c8d147849f03',
      branch: 'dev',
      role: 'ACCOUNTADMIN',
      warehouse: 'COMPUTE_WH',
      content:
        "{{\r\n\tconfig(\r\n\t\tschema = 'mart',\r\n    materialized = 'table',\r\n    tags = ['finance_mis']\r\n\t)\r\n}}\r\n\r\nwith overall_orders as (\r\n  select * \r\n  from {{source('tpcds_ton','reason')}} o \r\n  left join {{ref('stg_tpcds_ton_inventory')}} d \r\n  left join {{ref('stg_tpcds_ton_warehouse')}} as \r\n  left join {{ref('int_tpch_ten_part')}} as vc \r\n  left join {{ref('int_tpcds_ton_item')}} gzm \r\n  left join {{ref('int_tpcds_ton_warehouse')}} gvt \r\n  left join {{ref('int_store_sale_promotion')}} pp \r\n  left join {{ref('stg_tpcds_ton_catalog_returns')}} dtr \r\n)\r\n\r\nselect * from overall_orders \r\n ",
    },
  ],
};

export default function (pickFromlocalStorage: boolean) {
  return new Promise<WorksheetResponse>((resolve) => {
    const localStorageWorksheets =
      pickFromlocalStorage && localStorage.getItem('worksheets');
    if (
      localStorageWorksheets &&
      Object.keys(JSON.parse(localStorageWorksheets)).length
    ) {
      resolve({
        activeWorksheets: JSON.parse(localStorageWorksheets),
      });
    }
    setTimeout(() => {
      resolve(mockWorksheetsData);
    }, 1500);
  }).then(({ activeWorksheets }) => ({
    status: activeWorksheets ? 'SUCCESS' : 'FAILURE',
    data: activeWorksheets,
  }));
}
