<script>
  function validateForm() {
    const adCheckbox = document.getElementById('adInquiry');
    const messageField = document.getElementById('message');

    // If checkbox is NOT checked and message is empty, show error
    if (!adCheckbox.checked && messageField.value.trim() === '') {
      alert('Please enter a message or check the ad inquiry box.');
      messageField.focus();
      return false; // prevent form submission
    }

    return true; // allow form to submit
  }
</script>
