// BookController

bookCtrl.books = [
          { title: 'Clean Code', author: 'Robert C. Martin', price: 12.34 },
          { title: 'Angular in Action', author: 'Brian Ford', price: 13.37 },
          { title: 'PHP Design Patterns', author: 'Stephan Schmidt', price: 42.23 },
          { title: 'High Performance MySQL', author: 'Baron Schwartz', price: 47.11 }
        ];




// table
<table class="table table-striped" ng-controller="BookController">
      <tr ng-repeat="book in books | filter:name">
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.price }}</td>
      </tr>
    </table>