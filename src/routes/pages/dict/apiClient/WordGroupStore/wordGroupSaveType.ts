export interface WordGroupSaveType {
	id: string;
	created_at: string;
	wordgroup_memos: WordGroupMemosSaveType[];
	words: WordGroupWordSaveType[];
}
export interface WordGroupMemosSaveType {
	id: string;
	created_at: string;
	text: string;
}
export interface WordGroupWordSaveType {
	id: string;
	szo: string;
}
