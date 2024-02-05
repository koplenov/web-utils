namespace $.$$ {
	export class $koplenov_utils extends $.$koplenov_utils {
		
		counter_block_title() {
			return `
				Кол-во символов ${this.Input_text_in_counter_block().value().length}
			 	Кол-во строк ${this.Input_text_in_counter_block().value().split("\n").length}
			 	Кол-во окенов (делим слова на пробелы) ${this.Input_text_in_counter_block().value().split(" ").length}
			`
		}
		
	}
}
