'use strict';

const output = document.querySelector('#output');
document.querySelector('#show-output').addEventListener('click', () => {
  const name = 'Abubakr';
  const max = 100;
  console.log(name, max);
  output.textContent = `Name: ${name} · MAX: ${max}`;
});

document.querySelector('#change-text').addEventListener('click', () => {
  const message = document.querySelector('#message');
  message.textContent = 'Nice! JavaScript changed this text.';
  message.classList.add('success');
});

document.querySelector('#greet').addEventListener('click', () => {
  const name = document.querySelector('#name-input').value.trim();
  const greeting = document.querySelector('#greeting');
  greeting.textContent = name ? `Hello, ${name}!` : 'Please enter your name.';
  greeting.classList.toggle('success', Boolean(name));
});

document.querySelector('#check-score').addEventListener('click', () => {
  const input = document.querySelector('#score-input');
  const score = Number(input.value);
  let result;

  if (input.value === '') {
    result = 'Please enter a score.';
  } else if (!Number.isFinite(score) || !Number.isInteger(score) || score < 0 || score > 100) {
    result = 'Enter a whole-number score from 0 to 100.';
  } else if (score >= 90) {
    result = 'Grade A';
  } else if (score >= 80) {
    result = 'Grade B';
  } else if (score >= 70) {
    result = 'Grade C';
  } else {
    result = 'Grade F';
  }

  const grade = document.querySelector('#grade');
  grade.textContent = result;
  grade.classList.toggle('success', result.startsWith('Grade'));
});

document.querySelector('#run-loops').addEventListener('click', () => {
  const steps = [];
  for (let step = 1; step <= 5; step += 1) {
    steps.push(`Step ${step}`);
  }
  document.querySelector('#loop-output').textContent = steps.join('\n');
});

const savedOutput = document.querySelector('#saved-output');
document.querySelector('#save-name').addEventListener('click', () => {
  const name = document.querySelector('#username').value.trim();
  if (!name) {
    savedOutput.textContent = 'Please enter a username.';
    savedOutput.classList.remove('success');
    return;
  }

  try {
    localStorage.setItem('username', name);
    savedOutput.textContent = 'Username saved!';
    savedOutput.classList.add('success');
  } catch {
    savedOutput.textContent = 'Browser storage is unavailable, so the username could not be saved.';
    savedOutput.classList.remove('success');
  }
});

document.querySelector('#load-name').addEventListener('click', () => {
  try {
    const saved = localStorage.getItem('username');
    savedOutput.textContent = saved ? `Saved username: ${saved}` : 'No saved username.';
    savedOutput.classList.toggle('success', Boolean(saved));
  } catch {
    savedOutput.textContent = 'Browser storage is unavailable, so the username could not be loaded.';
    savedOutput.classList.remove('success');
  }
});

document.querySelector('#delete-name').addEventListener('click', () => {
  try {
    localStorage.removeItem('username');
    savedOutput.textContent = 'Saved username deleted.';
    savedOutput.classList.remove('success');
  } catch {
    savedOutput.textContent = 'Browser storage is unavailable, so the username could not be deleted.';
    savedOutput.classList.remove('success');
  }
});
