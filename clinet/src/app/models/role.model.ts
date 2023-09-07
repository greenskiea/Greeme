
export interface Role {
    id: number,
    name: string,
    assignable?: boolean,
    issues_visibility?: string,
    time_entries_visibility?: string,
    users_visibility?: string,
    permissions?: string[]
}



// "roles": [
//   {
//       "id": 11,
//       "name": "Customer"
//   },
//   {
//       "id": 3,
//       "name": "Project Manager"
//   },
//   {
//       "id": 8,
//       "name": "Business Analyst"
//   },
//   {
//       "id": 6,
//       "name": "Developer Leader"
//   },
//   {
//       "id": 7,
//       "name": "Tester"
//   },
//   {
//       "id": 4,
//       "name": "Developer"
//   },
//   {
//       "id": 9,
//       "name": "Tester Leader"
//   },
//   {
//       "id": 10,
//       "name": "Comtor"
//   },
//   {
//       "id": 5,
//       "name": "Reporter"
//   }
// ]





// "role": {
//   "id": 3,
//   "name": "Project Manager",
//   "assignable": true,
//   "issues_visibility": "all",
//   "time_entries_visibility": "all",
//   "users_visibility": "all",
//   "permissions": [
//       "edit_project",
//       "select_project_modules",
//       "manage_members",
//       "manage_versions",
//       "save_queries",
//       "view_agile_queries",
//       "view_messages",
//       "add_messages",
//       "edit_messages",
//       "edit_own_messages",
//       "delete_messages",
//       "delete_own_messages",
//       "view_message_watchers",
//       "add_message_watchers",
//       "delete_message_watchers",
//       "manage_boards",
//       "view_calendar",
//       "view_documents",
//       "add_documents",
//       "edit_documents",
//       "delete_documents",
//       "view_files",
//       "manage_files",
//       "view_gantt",
//       "view_issues",
//       "add_issues",
//       "edit_issues",
//       "edit_own_issues",
//       "copy_issues",
//       "manage_issue_relations",
//       "manage_subtasks",
//       "set_issues_private",
//       "set_own_issues_private",
//       "add_issue_notes",
//       "edit_issue_notes",
//       "edit_own_issue_notes",
//       "view_private_notes",
//       "set_notes_private",
//       "delete_issues",
//       "view_issue_watchers",
//       "add_issue_watchers",
//       "delete_issue_watchers",
//       "import_issues",
//       "manage_categories",
//       "view_news",
//       "manage_news",
//       "comment_news",
//       "view_changesets",
//       "browse_repository",
//       "commit_access",
//       "manage_related_issues",
//       "manage_repository",
//       "view_time_entries",
//       "log_time",
//       "edit_time_entries",
//       "edit_own_time_entries",
//       "manage_project_activities",
//       "log_time_for_other_users",
//       "import_time_entries",
//       "view_wiki_pages",
//       "view_wiki_edits",
//       "export_wiki_pages",
//       "edit_wiki_pages",
//       "rename_wiki_pages",
//       "delete_wiki_pages",
//       "delete_wiki_pages_attachments",
//       "protect_wiki_pages",
//       "manage_wiki"
//   ]
// }
