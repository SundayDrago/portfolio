(function(){
	const THEME_KEY = 'pref:theme';
	const LAYOUT_KEY = 'pref:layout';

	function applyTheme(themeClass){
		const body = document.body;
		body.classList.remove('theme-dark','theme-emerald','theme-rose');
		if (themeClass && themeClass !== 'default') body.classList.add(themeClass);
	}

	function applyLayout(layoutClass){
		const body = document.body;
		body.classList.remove('layout-wide','layout-compact','layout-masonry');
		if (layoutClass && layoutClass !== 'default') body.classList.add(layoutClass);
	}

	function initPreferences(){
		try{
			const themeSelect = document.getElementById('theme-select');
			const layoutSelect = document.getElementById('layout-select');
			const savedTheme = localStorage.getItem(THEME_KEY) || 'default';
			const savedLayout = localStorage.getItem(LAYOUT_KEY) || 'default';
			applyTheme(savedTheme);
			applyLayout(savedLayout);
			if (themeSelect) themeSelect.value = savedTheme;
			if (layoutSelect) layoutSelect.value = savedLayout;

			if (themeSelect){
				themeSelect.addEventListener('change', (e)=>{
					const value = e.target.value;
					applyTheme(value);
					try{ localStorage.setItem(THEME_KEY, value); }catch(_){}
				});
			}
			if (layoutSelect){
				layoutSelect.addEventListener('change', (e)=>{
					const value = e.target.value;
					applyLayout(value);
					try{ localStorage.setItem(LAYOUT_KEY, value); }catch(_){}
				});
			}
		}catch(e){
			// ignore
		}
	}

	document.addEventListener('DOMContentLoaded', initPreferences);
})();
