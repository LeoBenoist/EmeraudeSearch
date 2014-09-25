EmeraudeSearch
==============
Filter your list, table, div without doing any js.

### Example

```html
<label for="search">Search</label>
<input
        data-em-search='true'
        data-em-search-parent-searchable-selector='.item'
        data-em-search-searchable-selector='.name'
        type="text" name="search" id="search" placeholder="Search"/>

<div class="item">
    <div>
        <span class="name">Nom 1</span>
    </div>
    <div>
        <span class="name">Nom 2</span>
    </div>
    <div>
        <span class="name">Nom 3</span>
    </div>
</div>
```
